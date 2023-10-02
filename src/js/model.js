"use strict";

import { API_KEY, API_URL } from "./config";
import { dataDealer, unitList } from "./data";
import shoppinglistView from "./views/shoppinglistView";

export let state = {
  dealer: {
    id: null,
  },
  product: {
    id: null,
    bookmarked: false,
  },
  shoppingCart: [],
  bookmarks: {
    Lidl: [],
    Beka: [],
  },
  quantityNumber: 1,
  curDealer: "",
  curScrollPos: 0,
  timeStamp: "",
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
  state.product = productList;
};

export const resetCurUnit = function () {
  state.product.unit = "test";
};

export const addBookmark = function (data) {
  const product = data.find((el) => el.id === +data.id);
  product.bookmarked = product.bookmarked ? false : true;

  saveLocal();
};

const findEl = (data) => data.find((el) => el.id === +data.id);

export const createShoppingCart = function (data) {
  state.dealer.forEach((dealer) => {
    state.shoppingCart.push({ [dealer.name]: [] });
  });
};

export const addProductToCart = function () {
  const dealer = findEl(state.dealer);
  const product = findEl(state.product);

  const productFull = {
    ...product,
    quantity: state.quantityNumber,
  };

  productFull.unit = document.querySelector(".unitValue").innerHTML;

  // ÜBERARBEITEN ---------------------------------------------------------

  state.shoppingCart.forEach((cart) => {
    if (cart[dealer.name]) {
      const productIndex = cart[dealer.name].findIndex(
        (product) => product.id === productFull.id
      );
      if (productIndex !== -1) {
        cart[dealer.name][productIndex] = productFull;
      } else {
        cart[dealer.name].push(productFull);
      }
    }
  });

  saveLocal();
  console.log(JSON.parse(localStorage.getItem("orderlistV2")));
};

export const deleteProduct = function (id) {
  const dealer = state.shoppingCart.find((dealers) => dealers[state.curDealer]);
  if (dealer && dealer[state.curDealer]) {
    dealer[state.curDealer] = dealer[state.curDealer].filter((product) => {
      return product.id !== +id;
    });
  }

  saveLocal();
  console.log(JSON.parse(localStorage.getItem("orderlistV2")));
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
};

export const loadCurDealer = function () {
  const dealer = state.dealer.find((dealer) => +state.dealer.id === dealer.id);
  state.curDealer = dealer.name;
};

export const addToProductList = function (value) {
  const generateID = function () {
    let IDs = [];
    state.product.forEach((pro) => IDs.push(pro.id));

    let newID;
    do {
      newID = Math.floor(2000 + Math.random() * 1000).toString();
    } while (IDs.includes(+newID));

    return +newID;
  };

  const obj = {
    id: generateID(),
    name: `${value}`,
    unit: "Stück",
    category: "other",
    image_src:
      "https://media.istockphoto.com/id/505408074/de/foto/gro%C3%9Fen-weidenkorb-mit-bio-produkten.jpg?s=612x612&w=0&k=20&c=PhJBvDvSZ5XAXSEYZ5kIH3nNHK_Et1m6WfuJY8lRTJA=",
  };

  state.product.push(obj);
  saveLocal();
};

export const saveLocal = function () {
  localStorage.setItem("orderlistV2", JSON.stringify(state));
};

export const loadStorage = function () {
  let storage = localStorage.getItem("orderlistV2");
  if (storage) state = JSON.parse(storage);
  console.log("Storage:", JSON.parse(storage));
};

// const timeout = function (s = 2.5) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

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
