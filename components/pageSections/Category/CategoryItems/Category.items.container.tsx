import { useRouter } from "next/router";
import { routesConfig } from "../../../../config/routes/routes";
import { cardData } from "../../card.data";
import CategoryItemsPromo from "./Category.items.promo";

const CategoryItemsContainer = () => {
  const {
    push,
    asPath,
    query: { categoryID },
  } = useRouter();

  const goLocation = (productID: string | number, productTitle: string) => {
    const path = routesConfig.getProductRoute(asPath);
    push(
      { pathname: path, query: { productTitle, productID, categoryID } },
      path
    );
  };

  return <CategoryItemsPromo categoryData={cardData} goLocation={goLocation} />;
};

export default CategoryItemsContainer;
