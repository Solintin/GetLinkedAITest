export interface PagedInfo {
  page: number;
  limit: number;
  hasPrevious: boolean;
  hasNext: boolean;
  total: number;
}
