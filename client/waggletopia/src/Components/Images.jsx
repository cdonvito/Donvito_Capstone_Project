import { productsToCreate } from "../../../../server/productSeed";

// build a map of filename → dog photo URL
export const imageUrlMap = productsToCreate.reduce((map, product, i) => {
  map[product.img_url] = `https://placedog.net/1024/1024?random=${i}`;
  return map;
}, {});
