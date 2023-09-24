"use strict";

import View from "./View.js";

class MenuView extends View {
  _burgerButton = document.querySelector(".burgerContainer");
  _closeButton = document.querySelector(".closeButtonContainer");
  _menuDealerButton = document.querySelector(".menuMyDealer");

  _openCloseMenu() {
    const menu = document.querySelector("#menu");
    menu.style.width = menu.style.width === "70vw" ? "" : "70vw";
  }

  toggleMenu() {
    [this._burgerButton, this._closeButton].forEach((button) => {
      button.addEventListener("click", this._openCloseMenu);
    });
  }

  toDealer(handler) {
    this._menuDealerButton.addEventListener("click", () => {
      handler();
      this._openCloseMenu();
    });
  }
}

export default new MenuView();
