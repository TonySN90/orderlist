"use strict";

import * as model from "./model.js";
import DashboardView from "./views/dashboardView";
import ProductView from "./views/productView";
import shoppingCartView from "./views/shoppingCartView";
import ShoppinglistView from "./views/shoppinglistView";
import headerView from "./views/headerView";
import productView from "./views/productView";
import menuView from "./views/menuView.js";
import shoppinglistView from "./views/shoppinglistView";
import dashboardView from "./views/dashboardView";

const controlBackToDB = function () {
  dashboardView.renderSpinner();
  setTimeout(function () {
    DashboardView.render(model.state);
    headerView.movementCartLogo();
    model.loadID();
    headerView.resetHeader();
    menuView.hideMenuEntry_Clear();
  }, 400);
};

const controlCLearShoppingCart = function () {
  model.clearShoppingList();
  controlRenderShoLi();
  headerView.hideBackArrow();
  model.createLogEntry();
  // fixing bug
};

const controlMenu = function () {
  menuView.toDealer(controlBackToDB);
  menuView.addHandlerClearShoppingList(controlCLearShoppingCart);
  headerView.resetHeader();
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
  model.createLogEntry();
  model.saveLocal();
};

const controlDeleteProduct = function () {
  model.deleteProduct(shoppingCartView.product);
  controlRenderShoCa();
};

const controlLoadDb = function () {
  dashboardView.renderSpinner();
  setTimeout(function () {
    model.loadDealerList();
    DashboardView.render(model.state);
    model.loadID();
    model.createShoppingCart();
    DashboardView.addHandlerRender(controlRenderShoLi);
  }, 200);
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

  // Validierung einfügen!!!!!!!!!!!!!!!!!!!!!!!!!!
};

const controlScroll = function () {
  model.saveScrollPosition();
};

const controlRenderShoLi = function () {
  ShoppinglistView.renderSpinner();
  setTimeout(function () {
    ShoppinglistView.render(model.state);
    model.resetQuantityNumber();
    ShoppinglistView.addHandlerRender(controlRenderProduct);
    DashboardView.addHandlerRender(controlRenderShoCa);
    headerView.movementCartLogo();
    headerView.changeOverviewTitle(model.state.dealer);
    model.loadID(model.state);
    model.loadCurDealer();
    model.loadProductList();
    ShoppinglistView.addToShoppingList(controlAddProductToShoLi);
    menuView.displayMenuEntry_Clear();
    model.loadScrollPosition();
  }, 300);
};

const controlQuantity = function (operator) {
  model.changeQuantity(operator);
  productView.displayQuantity(model.state.quantityNumber);
};

const controlRenderProduct = function (from = false) {
  productView.renderSpinner();
  setTimeout(function () {
    ProductView.render(model.state, from);
    ProductView.addHandlerBack(controlClickBack);
    headerView.movementHeader();
    productView.addHandlerChangeQuantity(controlQuantity, from);
    productView.addHandlerAddBookmark(controlAddBookmark);
    productView.AddToShoppingCart(controlAddToShoppingCart);
    productView.addHandlerSelectUnit(controlUnitSelectList);
    productView.unfoldText();
  }, 150);
};

// const productHelper() {

// }

const controlBackToPV = function (productID) {
  // model.load(productID);
  productView.renderSpinner();
  setTimeout(function () {
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
  }, 200);

  // ÜBERARBEITEN
};

const controlRenderShoCa = function () {
  shoppingCartView.renderSpinner();
  setTimeout(function () {
    shoppingCartView.render(model.state, false);
    headerView.changeOverviewTitle(model.state.dealer, true);
    headerView.movementArrowBackHeader();
    headerView.addHandlerBack(controlClickBack);
    shoppingCartView.addHandlerDeleteProduct(
      controlDeleteProduct,
      controlBackToPV
    );
  }, 200);
};

const init = function () {
  model.loadStorage();
  DashboardView.addHandlerLoadDb(controlLoadDb);
  menuView.toggleMenu();
  controlMenu();
  shoppinglistView.addHandlerScroll(controlScroll);
};

init();
