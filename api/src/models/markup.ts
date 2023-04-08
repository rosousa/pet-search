class Markup {
  id: number;

  lat: number;

  lng: number;

  createdAt: Date;

  updatedAt: Date;

  constructor({ id, lat, lng, createdAt, updatedAt }: Markup) {
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default Markup;
