import { CreateMarkupService } from '../../usecases/create-markup/markup.service';
import { MarkupRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';
import { JwtService } from '../../utils/jwt-service';

describe('CreateMarkupService', () => {
  let markupRepository: MarkupRepository;
  let sessionRepository: SessionRepository;
  let createMarkupService: CreateMarkupService;

  beforeEach(() => {
    markupRepository = new MarkupRepository();
    sessionRepository = new SessionRepository();
    createMarkupService = new CreateMarkupService(markupRepository, sessionRepository);
  });

  it('should create a new markup', async () => {
    const mockMarkupData = {
      name: 'Test Markup',
      lat: 123.45,
      lng: 67.89,
      tel: '123456789',
      description: 'Test description',
      imageUrl: 'http://example.com/image.jpg',
    };

    const mockToken = 'mockToken';
    const mockDecryptedPayload = { userId: 123 };
    const mockSession = {};

    JwtService.decrypt = jest.fn().mockReturnValue(mockDecryptedPayload);
    sessionRepository.getSession = jest.fn().mockResolvedValue(mockSession);
    markupRepository.create = jest.fn().mockResolvedValue(mockMarkupData);

    const result = await createMarkupService.execute(mockMarkupData, mockToken);

    expect(JwtService.decrypt).toHaveBeenCalledWith(mockToken);
    expect(sessionRepository.getSession).toHaveBeenCalledWith(mockDecryptedPayload.userId);
    expect(markupRepository.create).toHaveBeenCalledWith({
      ...mockMarkupData,
      userId: mockDecryptedPayload.userId,
    });
    expect(result).toEqual(mockMarkupData);
  });

  it('should throw an error if session is not found', async () => {
    const mockMarkupData = {
      name: 'Test Markup',
      lat: 123.45,
      lng: 67.89,
      tel: '123456789',
      description: 'Test description',
      imageUrl: 'http://example.com/image.jpg',
    };

    const mockToken = 'mockToken';

    const mockDecryptedPayload = { userId: 123 };
    const mockSession = null;

    JwtService.decrypt = jest.fn().mockReturnValue(mockDecryptedPayload);
    sessionRepository.getSession = jest.fn().mockResolvedValue(mockSession);
    markupRepository.create = jest.fn();

    await expect(createMarkupService.execute(mockMarkupData, mockToken)).rejects.toThrow('No session');

    // Assertions
    expect(JwtService.decrypt).toHaveBeenCalledWith(mockToken);
    expect(sessionRepository.getSession).toHaveBeenCalledWith(mockDecryptedPayload.userId);
    expect(markupRepository.create).not.toHaveBeenCalled();
  });
});