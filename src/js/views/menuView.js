"use strict";

import View from "./View.js";

class MenuView extends View {
  _burgerButton = document.querySelector(".burgerContainer");

  openMenu() {
    this._burgerButton.addEventListener("click", function () {
      const menu = document.querySelector("#menu");
      menu.style.width = "70vw";
    });
  }
}

export default new MenuView();
