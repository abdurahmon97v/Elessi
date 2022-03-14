import { data } from "./data";

const saleProduct = () => {
  const sales = data.allProducts.filter((e)=>(e.sale));
  return sales;
};

export {
  saleProduct,
}

