import { itemsMenu } from "../type/footer.menu.type";

export interface IMenu {
  title: string;
  items: Array<{ [K in keyof itemsMenu]: itemsMenu[K] }>;
}

export interface IFollow {
  title: string;
  phone: string;
  instagramLink: string;
  twitterLink: string;
  whatsAppLink: string;
}
