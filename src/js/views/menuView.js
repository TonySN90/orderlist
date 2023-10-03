"use strict";

import View from "./View.js";

class MenuView extends View {
  _burgerButton = document.querySelector(".burgerContainer");
  _closeButton = document.querySelector(".closeButtonContainer");
  _menuDealerButton = document.querySelector(".menuMyDealer");
  _menuClearButton = document.querySelector(".menuClearList");

  openCloseMenu() {
    const menu = document.querySelector("#menu");
    menu.style.width = menu.style.width === "70vw" ? "" : "70vw";
  }

  toggleMenu() {
    [this._burgerButton, this._closeButton].forEach((button) => {
      button.addEventListener("click", this.openCloseMenu);
    });
  }

  toDealer(handler) {
    this._menuDealerButton.addEventListener("click", () => {
      handler();
      this.openCloseMenu();
    });
  }

  displayMenuEntry_Clear() {
    this._menuClearButton.classList.remove("hidden");
  }

  hideMenuEntry_Clear() {
    this._menuClearButton.classList.add("hidden");
  }

  addHandlerClearShoppingList(handler) {
    this._menuClearButton.addEventListener("click", () => {
      handler();
    });
  }
}

export default new MenuView();
