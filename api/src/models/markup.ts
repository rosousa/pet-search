class Markup {
  id: number;

  name: string;

  userId: number;

  lat: number;

  lng: number;

  tel: string;

  description: string;

  imageUrl: string;

  createdAt: Date;

  updatedAt: Date;

  constructor({
    id,
    name,
    userId,
    lat,
    lng,
    tel,
    description,
    imageUrl,
    createdAt,
    updatedAt,
  }: Markup) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.lat = lat;
    this.lng = lng;
    this.tel = tel;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default Markup;
