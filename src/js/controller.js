"use strict";

import * as model from "./model.js";
import DashboardView from "./views/dashboardView";
import ProductView from "./views/productView";
import shoppingCartView from "./views/shoppingCartView";
import ShoppinglistView from "./views/shoppinglistView";
import headerView from "./views/headerView";
import productView from "./views/productView";
import menuView from "./views/menuView.js";
import dashboardView from "./views/dashboardView";
import View from "./views/View.js";

const controlBackToDB = function () {
  DashboardView.render(model.state.dealer);
  headerView.movementCartLogo();
  model.loadID();

  headerView.resetHeader();
};

const controlMenu = function () {
  menuView.toDealer(controlBackToDB);
};

const controlAddBookmark = function () {
  model.addBookmark(model.state.product);
  controlRenderProduct();
};

const controlAddToShoppingCart = function (fromCart) {
  model.addProductToCart(model.state);
  console.log(fromCart);
  if (fromCart) controlRenderShoCa();
  if (!fromCart) controlRenderShoLi();
  headerView.movementHeader();
};

const controlDeleteProduct = function () {
  model.deleteProduct(shoppingCartView.product);
  controlRenderShoCa();
};

const controlLoadDb = function () {
  model.loadDealerList();
  DashboardView.render(model.state.dealer);
  model.loadID();
  model.createShoppingCart();
  DashboardView.addHandlerRender(controlRenderShoLi);
};

const controlClickBack = function (fromCart) {
  if (fromCart) controlRenderShoCa();
  if (!fromCart) controlRenderShoLi();
  headerView.movementHeader();
};

const controlUnitSelectList = function () {
  productView.displayUnitSelectList();
  productView.selectUnit();
  model.addUnitToProduct(productView.unitValueReturn);
};

const controlRenderShoLi = function () {
  model.resetQuantityNumber();
  ShoppinglistView.render(model.state);
  ShoppinglistView.addHandlerRender(controlRenderProduct);
  DashboardView.addHandlerRender(controlRenderShoCa);
  headerView.movementCartLogo();
  headerView.changeOverviewTitle(model.state.dealer);
  model.loadID(model.state);
  model.loadCurDealer();
  model.loadProductList();
};

const controlRenderProduct = function (operator, from = false) {
  model.changeQuantity(operator);
  ProductView.render(model.state, from);
  ProductView.addHandlerBack(controlClickBack);
  headerView.movementHeader();
  productView.addHandlerChangeQuantity(controlRenderProduct);
  productView.addHandlerAddBookmark(controlAddBookmark);
  productView.AddToShoppingCart(controlAddToShoppingCart);
  productView.addHandlerSelectUnit(controlUnitSelectList);
};

const controlBackToPV = function (productID) {
  // model.load(productID);
  model.state.product.id = productID;
  ProductView.render(model.state, true);
  ProductView.addHandlerBack(controlClickBack);
  headerView.movementHeader();
  productView.addHandlerChangeQuantity(controlRenderProduct, true);
  productView.addHandlerAddBookmark(controlAddBookmark);
  productView.AddToShoppingCart(controlAddToShoppingCart);
  productView.addHandlerSelectUnit(controlUnitSelectList);
  headerView.resetHeader();

  // ÜBERARBEITEN
};

const controlRenderShoCa = function () {
  shoppingCartView.render(model.state, false);
  headerView.changeOverviewTitle(model.state.dealer, true);
  headerView.movementArrowBackHeader();
  headerView.addHandlerBack(controlClickBack);
  shoppingCartView.addHandlerDeleteProduct(
    controlDeleteProduct,
    controlBackToPV
  );
};

const init = function () {
  DashboardView.addHandlerLoadDb(controlLoadDb);
  menuView.toggleMenu();
  controlMenu();
};

init();

// const markup = `
// <img src="src/img/products/strawberry.png" alt="" />
// `;

// const body = document.querySelector("body");
// body.insertAdjacentHTML("afterbegin", markup);

// console.log("test");
