import { data } from "./data";

const saleProduct = () => {
  const sales = data.allProducts.filter((e) => (e.sale));
  return sales;
};
const sortRaiting = (item) => {
  const result = data.allProducts.filter((e)=> (e[item]));
  return result;
}

export {
  saleProduct,
  sortRaiting,
}

