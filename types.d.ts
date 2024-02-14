export type Meta = {
  id: string,
  title: string,
  date: string,
  tags: string[],
  description?: string,
  imageUrl?: string | StaticImport,
}

export type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

