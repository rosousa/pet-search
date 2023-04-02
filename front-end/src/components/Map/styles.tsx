import { Popup } from 'react-leaflet';
import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 6px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledPopup = styled(Popup)`
  border-radius: 0;

  .leaflet-popup-content-wrapper {
    border-radius: 0;
    background-color: #fff;
    width: 300px;
    height: 400px;
    border-radius: 6px;
  }

  .leaflet-popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledTitle = styled.h5`
  font-size: 1.3rem;
  color: #3a3a3a;
  padding: 8px 0;
`;

export const StyledDescription = styled.div`
  font-size: 1.1rem;
  width: 80%;
  height: 200px;
  color: #474747;
  overflow: hidden;
  text-align: center;
`;
