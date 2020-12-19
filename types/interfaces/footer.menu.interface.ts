import { itemsMenu } from "../type/footer.menu.type";

export interface IMenu<T> {
  title: string;
  items: Array<{ [K in keyof itemsMenu]: T }>;
}

export interface IFollow {
  title: string;
  phone: string;
  instagramLink: string;
  twitterLink: string;
  whatsAppLink: string;
}
