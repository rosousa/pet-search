class Markup {
  id: string;

  lat: number;

  lng: number;

  constructor({ id, lat, lng }: Markup) {
    this.id = id;
    this.lat = lat;
    this.lng = lng;
  }
}

export default Markup;
