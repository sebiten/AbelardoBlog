type BlogPost = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  categories: string[];
  content: string;
};

export interface Source {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
  id: string;
  name: string;
}
