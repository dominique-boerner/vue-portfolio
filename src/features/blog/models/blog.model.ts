export interface BlogPost {
  sections: BlogSection[]
  header: BlogSectionHeader
  date: string
  author: string
}

export interface BlogSectionHeader {
  title: string
  imgSrc: string
}

export interface BlogSection {
  type: BlogSectionType
  imgSrc?: string
  text?: string
  code?: string
  codeLanguage?: string
}

export type BlogSectionType = "image" | "text" | "code"

export type BlogPosts = BlogPost[]
