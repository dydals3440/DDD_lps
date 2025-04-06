export interface APIResponse<T> {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
}
