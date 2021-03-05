export interface ICreateApiParams {
  url?: string;
  apiPrefix: string;
  query?: { [key: string]: any };
  params?: { [key: string]: any };
}
