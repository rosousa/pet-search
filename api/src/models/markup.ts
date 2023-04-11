class Markup {
  id: number;

  name: string;

  lat: number;

  lng: number;

  tel: string;

  imageUrl: string;

  createdAt: Date;

  updatedAt: Date;

  constructor({
    id,
    name,
    lat,
    lng,
    tel,
    imageUrl,
    createdAt,
    updatedAt,
  }: Markup) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.tel = tel;
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default Markup;
