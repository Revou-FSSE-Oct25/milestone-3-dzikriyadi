export type Product = {
  id: number;
  name: string; //
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  image: string | string[]; // Bisa string tunggal atau array
  images: string;
};
// export type category = {
//   id: number;
//   name: string;
//   image: string;
//   slug: string;
// };
