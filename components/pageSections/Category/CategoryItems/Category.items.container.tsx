import { useRouter } from "next/router";
import { routesConfig } from "../../../../config/routes/routes";
import CategoryItemsPromo from "./Category.items.promo";

const CategoryItemsContainer = ({ categoryItems }) => {
    const { replace } = useRouter();
    const goLocation = ({ prefix }) => {
        const path = routesConfig.getProductsRoute();
        replace({
            pathname: path,
            query: { prefix },
        });
    };

    return (
        <CategoryItemsPromo
            categoryData={categoryItems}
            goLocation={goLocation}
        />
    );
};

export default CategoryItemsContainer;
