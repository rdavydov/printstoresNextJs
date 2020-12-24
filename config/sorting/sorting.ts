export interface ISortConfig {
  fieldName: string;
  title: string;
  handler: (type: string, func: () => void) => Promise<any>;
  setData: () => void;
}

type getConfig = "name" | "price" | "material";
interface IGetConfig {
  fieldsConfig: getConfig[];
}

export class ProductSorting {
  name = "По названию";
  price = "По цене";
  material = "По материалу";
  setData;
  constructor(setData) {
    this.setData = setData;
  }

  sort(pathname, func) {
    console.log(pathname);
    func();
  }

  getProductSortConfig(fieldsConfig: getConfig[]) {
    const sortConfig = fieldsConfig.reduce((acc, item) => {
      return [
        ...acc,
        {
          fieldName: item,
          title: this[item],
          handler: this.sort,
          setData: this.setData,
        },
      ];
    }, []);

    return sortConfig;
  }
}
