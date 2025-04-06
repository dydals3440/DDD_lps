export interface CursorPagination<T> {
  data: T[];
  nextCursor: number | null;
  hasNext: boolean;
}
