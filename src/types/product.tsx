export type Product = {
  id: number;
  title: string; //
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

export interface Category {
  id: number;
  title: string;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

// export interface CategorySectionProps extends React.HTMLAttributes<HTMLDivElement> {
//   title?: string;
//   subtitle?: string;
//   categories?: Category[];
// }

// export type category = {
//   id: number;
//   name: string;
//   image: string;
//   slug: string;
// };

// export const CategorySection = React.forwardRef<
//   HTMLDivElement,
//   CategorySectionProps
// >(
//   (
//     {
//       className,
//       title = "Shop by Category",
//       subtitle = "Find the perfect device for your needs from our curated collections",
//       categories = [
//         {
//           id: "audio",
//           name: "Audio",
//           productCount: 12,
//           imageSrc:
//             "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
//           imageAlt: "Audio Products",
//           href: "/products?category=audio",
//         },
//         {
//           id: "wearables",
//           name: "Wearables",
//           productCount: 8,
//           imageSrc:
//             "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
//           imageAlt: "Wearables Products",
//           href: "/products?category=wearables",
//         },
//         {
//           id: "smartphones",
//           name: "Smartphones",
//           productCount: 15,
//           imageSrc:
//             "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&q=80",
//           imageAlt: "Smartphones Products",
//           href: "/products?category=smartphones",
//         },
//         {
//           id: "laptops",
//           name: "Laptops",
//           productCount: 10,
//           imageSrc:
//             "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
//           imageAlt: "Laptops Products",
//           href: "/products?category=laptops",
//         },
//       ],
//       ...props
//     },
//     ref: React.ForwardedRef<HTMLDivElement>,
//   ): React.ReactElement => {})
