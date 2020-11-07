export interface Article {
  body: string;
  categories: Category[];
  createdAt: number;
  tags: Tag[];
  title: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export function createArticle(initial: Partial<Article> = {}): Article {
  return {
    body: "",
    categories: [],
    createdAt: 0,
    tags: [],
    title: "",
    ...initial,
  };
}
