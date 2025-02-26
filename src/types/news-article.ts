// src/types/Article.ts
export interface NewsArticle {
  title: string;
  url: string;
  source: {
    id?: string | null;
    name?: string;
  };
  publishedAt: string;
  description: string;
  urlToImage: string;
  content: string;
  author?:string
}
