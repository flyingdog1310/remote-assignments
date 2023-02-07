/**
 * This function calculate the average price of all the products
 * @param {object} data - an object contains a key "products" which include a key "price"
 * @returns {number}  the average of the key "price"
 */
function avg(data) {
  let averagePrice = 0;
  for (let i = 0; i < data.products.length; i++) {
    averagePrice += data.products[i].price;
  }
  averagePrice = averagePrice / data.products.length;
  return averagePrice;
}

//following is for testing
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
