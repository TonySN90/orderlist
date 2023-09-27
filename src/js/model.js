"use strict";

import { API_KEY, API_URL } from "./config";
import { dataDealer, unitList } from "./data";
import shoppinglistView from "./views/shoppinglistView";

export const state = {
  dealer: {
    id: null,
  },
  product: {
    id: null,
    bookmarked: false,
  },
  shoppingCart: [{ Lidl: [] }, { Beka: [] }],
  bookmarks: {
    Lidl: [],
    Beka: [],
  },
  quantityNumber: 1,
  curDealer: "",
};

export const changeQuantity = function (operator) {
  if (state.quantityNumber >= 1) {
    if (operator === "+") state.quantityNumber++;
    if (operator === "-") state.quantityNumber--;
  }

  if ((state.quantityNumber === 0) & (operator === "+")) state.quantityNumber++;
};

export const resetQuantityNumber = function () {
  state.quantityNumber = 1;
};

export const loadDealerList = function () {
  state.dealer = dataDealer;
  state.units = unitList;
};

export const loadProductList = function () {
  const productList = shoppinglistView.loadProductList();
  // list.forEach((el) => (el.bookmarked = false));
  state.product = productList;
};

export const addUnitToProduct = function (unit) {
  const product = state.product.find((el) => el.id === +state.product.id);
  product.unit = unit;
};

export const addBookmark = function (data) {
  const product = data.find((el) => el.id === +data.id);
  product.bookmarked = product.bookmarked ? false : true;
};

const findEl = (data) => data.find((el) => el.id === +data.id);

export const addProductToCart = function (data) {
  const dealer = findEl(data.dealer);
  const product = findEl(data.product);
  const productFull = {
    ...product,
    quantity: state.quantityNumber,
  };

  state.shoppingCart.forEach((cart) => {
    cart[dealer.name]?.push(productFull);
  });
};

export const loadID = function (data) {
  const parentElement = document.querySelector(".cards");
  parentElement.addEventListener("click", function (e) {
    const id = e.target.closest(".card").dataset.id;
    if (!id) return;

    if (e.target.closest(".card").dataset.card === "dealer")
      state.dealer.id = id;
    state.product.id = id;
  });

  // state.curDealer = findEl(data.dealer);
};

const timeout = function (s = 2.5) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout()]);
//     const data = await res.json();

//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// const loadProduct = async function (id) {
//   const data = await getJSON(`${API_URL}?query=banana&apiKey=${API_KEY}`);
//   console.log(data.results);
// };

// loadProduct();
