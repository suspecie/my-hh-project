export interface ICategoriesData {
  data: IAllCategory;
}

export interface IAllCategory {
  allCategory: [ICategory];
}

export interface ICategory {
  id: number;
  title: string;
}
