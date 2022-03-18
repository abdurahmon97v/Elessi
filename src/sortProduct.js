import { data, userProducts, sentProduct } from "./data";


const saleProduct = () => {
  const sales = data.allProducts.filter((e) => (e.sale));
  return sales;
};
const sortRaiting = (item) => {
  const result = data.allProducts.filter((e) => (e[item]));
  return result;
};
const sortName = (item) => {
  const result = data.allProducts.filter((e) => (e.name === item));
  return result;
}


export {
  saleProduct,
  sortRaiting,
  sortName,
}

