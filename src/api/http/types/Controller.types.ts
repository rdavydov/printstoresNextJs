interface IDefaultParams {
  query?: { [key: string]: any };
  params?: { [key: string]: any };
  url?: string;
}

interface IGet extends IDefaultParams {}

interface IPost extends IDefaultParams {}

interface IPut extends IPost {}

interface IDelete extends IPost {}

export type { IGet, IPost, IDelete, IPut };
