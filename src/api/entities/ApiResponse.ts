export default interface ApiResponse<T> {
  statusCode: number;
  data: T;
}
