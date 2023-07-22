export interface StrapiResponse<T> {
  data: StrapiResponseData<T>[]
  meta: StrapiMeta
}

export interface StrapiResponseData<T> {
  id: number
  attributes: T
}

export interface StrapiMeta {
  pagination: StrapiPagination
}

export interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
