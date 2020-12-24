import { useRouter } from "next/router";
import { routesConfig } from "../../../../config/routes/routes";
import { cardData } from "../../card.data";
import CategoryItemsPromo from "./Category.items.promo";

const CategoryItemsContainer = ({ categoryItems }) => {
  const {
    replace,
    pathname,
    query: { categoryID, title },
  } = useRouter();
  const goLocation = (goodsID: string | number, goodsTitle: string) => {
    const path = routesConfig.getGoodsRoute(pathname);
    replace({
      pathname: path,
      query: { goodsTitle, goodsID, categoryID, title },
    });
  };

  return (
    <CategoryItemsPromo categoryData={categoryItems} goLocation={goLocation} />
  );
};

export default CategoryItemsContainer;
