interface IDefaultParams {
  query?: { [key: string]: any };
  params?: { [key: string]: any };
  url?: string;
}

interface IGet extends IDefaultParams {}

interface IPost extends IDefaultParams {
  body?: any;
}

interface IPut extends IPost {
  body?: any;
}

interface IDelete extends IPost {}

export type { IGet, IPost, IDelete, IPut };
