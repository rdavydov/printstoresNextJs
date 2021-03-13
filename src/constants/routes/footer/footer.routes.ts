import { Routes } from "../routes";

const ABOUT_US = [Routes.REVIEWS, Routes.ABOUT, Routes.SITE_MAP];
const HELP = [Routes.CONTACTS, Routes.DELIVERY, Routes.PAYMENTS, Routes.HELP];
const LEGAL = [Routes.PRIVACY, Routes.COOKIE, Routes.TERMS];

export enum FooterMenuLabels {
  ABOUT_US = "О компании",
  HELP = "Помощь",
  LEGAL = "Политика",
}

export const footerMenu = {
  ABOUT_US,
  HELP,
  LEGAL,
};
