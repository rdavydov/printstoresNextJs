import { useRouter } from "next/router";
import { routesConfig } from "../../../../config/routes/routes";
import { cardData } from "../../card.data";
import CategoryItemsPromo from "./Category.items.promo";

const CategoryItemsContainer = () => {
  const {
    push,
    pathname,
    query: { categoryID, title },
  } = useRouter();
  const goLocation = (productID: string | number, productTitle: string) => {
    const path = routesConfig.getProductRoute(pathname);
    push({
      pathname: path,
      query: { productTitle, productID, categoryID, title },
    });
  };

  return <CategoryItemsPromo categoryData={cardData} goLocation={goLocation} />;
};

export default CategoryItemsContainer;
