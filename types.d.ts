type Meta = {
  id: string,
  title: string,
  date: string,
  tags: string[],
  description?: string,
  imageUrl?: string | StaticImport,
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}