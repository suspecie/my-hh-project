export interface IProductsData {
  data: IPoc;
}

export interface IPoc {
  poc: IPocData;
}

export interface IPocData {
  id: string;
  products: [IProduct];
}

export interface IProduct {
  id: string;
  images: [IImage];
  productsVariants: [IProductVariants];
  title: string;
}

export interface IImage {
  url: string;
}

export interface IProductVariants {
  price: number;
}
