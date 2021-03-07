import { ICart } from "src/store/reducers/cart/products/products.reducer";

export interface CartCheckoutSidebarProps {}

export interface CartCheckoutSidebarListProps extends CartCheckoutSidebarProps {
  products: ICart[];
}

export interface CartCheckoutSidebarListItemProps extends ICart {}
