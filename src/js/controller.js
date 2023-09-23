"use strict";

import * as model from "./model.js";
import DashboardView from "./views/dashboardView";
import ProductView from "./views/productView";
import shoppingCartView from "./views/shoppingCartView";
import ShoppinglistView from "./views/shoppinglistView";
import headerView from "./views/headerView";
import productView from "./views/productView";

const controlAddBookmark = function () {
  model.addBookmark(model.state.product);
  controlRenderProduct();
};

const controlAddToShoppingCart = function () {
  model.addProductToCart(model.state);
  controlRenderShoLi();
  headerView.movementHeader();
};

const controlLoadDb = function () {
  model.loadDealerList();
  DashboardView.render(model.state.dealer);
  DashboardView.addHandlerRender(controlRenderShoLi);
  model.loadID();
};

const controlClickBack = function () {
  controlRenderShoLi();
  headerView.movementHeader();
};

const controlRenderShoLi = function () {
  model.resetQuantityNumber();
  ShoppinglistView.render(model.state);
  ShoppinglistView.addHandlerRender(controlRenderProduct);
  DashboardView.addHandlerRender(controlRenderShoCa);
  headerView.movementCartLogo();
  headerView.changeOverviewTitle(model.state.dealer);
  model.loadID(model.state);
  model.loadProductList();
};

const controlRenderProduct = function (operator) {
  model.changeQuantity(operator);
  ProductView.render(model.state);
  ProductView.addHandlerBack(controlClickBack);
  headerView.movementHeader();
  productView.addHandlerChangeQuantity(controlRenderProduct);
  productView.addHandlerAddBookmark(controlAddBookmark);
  productView.AddToShoppingCart(controlAddToShoppingCart);
};

const controlRenderShoCa = function () {
  shoppingCartView.render(model.state);
  headerView.changeOverviewTitle(model.state.dealer, true);
};

const init = function () {
  DashboardView.addHandlerLoadDb(controlLoadDb);
  console.log("Welcome");
};

init();

// const markup = `
// <img src="src/img/products/strawberry.png" alt="" />
// `;

// const body = document.querySelector("body");
// body.insertAdjacentHTML("afterbegin", markup);

// console.log("test");
