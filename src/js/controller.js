"use strict";

import * as model from "./model.js";
import DashboardView from "./views/dashboardView";
import ProductView from "./views/productView";
import shoppingCartView from "./views/shoppingCartView";
import ShoppinglistView from "./views/shoppinglistView";
import headerView from "./views/headerView";
import productView from "./views/productView";
import menuView from "./views/menuView.js";

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
  model.addProductToCart();
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
};

const controlAddProductToShoLi = function (value) {
  model.addToProductList(value);
  controlRenderShoLi();
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
  ShoppinglistView.addToShoppingList(controlAddProductToShoLi);
};

const controlQuantity = function (operator) {
  model.changeQuantity(operator);
  productView.displayQuantity(model.state.quantityNumber);
};

const controlRenderProduct = function (from = false) {
  // model.resetCurUnit();
  ProductView.render(model.state, from);
  ProductView.addHandlerBack(controlClickBack);
  headerView.movementHeader();
  productView.addHandlerChangeQuantity(controlQuantity, from);
  productView.addHandlerAddBookmark(controlAddBookmark);
  productView.AddToShoppingCart(controlAddToShoppingCart);
  productView.addHandlerSelectUnit(controlUnitSelectList);
};

// const productHelper() {

// }

const controlBackToPV = function (productID) {
  // model.load(productID);
  model.resetQuantityNumber();
  model.state.product.id = productID;
  ProductView.render(model.state, true);
  ProductView.addHandlerBack(controlClickBack);
  productView.addHandlerChangeQuantity(controlQuantity, true);
  productView.addHandlerAddBookmark(controlAddBookmark);
  productView.AddToShoppingCart(controlAddToShoppingCart);
  productView.addHandlerSelectUnit(controlUnitSelectList);
  headerView.movementHeader();
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
  model.loadStorage();
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
