export type Painting = {
  img: string;
  name: string;
  state: "sold" | "available" | "inCart";
  price: number;
  discount?: number;
};
