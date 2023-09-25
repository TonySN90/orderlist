"use strict";

import View from "./View.js";

class HeaderView extends View {
  _parentElementHeader = document.querySelector("#overview");
  _shoppingCartLogo = document.querySelector(".shoppingCartImg");
  _title = document.querySelector(".title");

  movementCartLogo() {
    this._showAndHideOP(this._shoppingCartLogo);
  }

  movementHeader() {
    this._parentElementBody.firstElementChild.className === "productView"
      ? (header.className = "hidden")
      : header.classList.remove("hidden");
  }

  changeOverviewTitle(dealerArr, open) {
    const dealer = dealerArr.find((id) => +dealerArr.id === id.id);

    const openCart = open ? "Warenkorb" : "Was brauchst du?";
    const markup = `<span class="t4">${openCart} <span class="t3">// ${dealer.name}</span>`;
    this._title.innerHTML = markup;
    this._showAndHideOP(this._title);
  }

  resetHeader() {
    this._shoppingCartLogo.classList.add("hidden");
    this._title.innerHTML = `<span class="t1">Orderlist <span class="t2"> v2.0</span>`;
  }
}

export default new HeaderView();
