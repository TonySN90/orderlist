"use strict";

import View from "./View.js";

class HeaderView extends View {
  _parentElementHeader = document.querySelector("#overview");
  _shoppingCartLogo = document.querySelector(".shoppingCartImg");
  _backButtonHeader = document.querySelector(".arrBackHeader");
  _title = document.querySelector(".title");

  addHandlerBack(handler) {
    this._backButtonHeader.addEventListener(
      "click",
      function () {
        handler();
        this._showAndHideOP(this._backButtonHeader, true);
      }.bind(this)
    );
  }

  movementCartLogo() {
    this._showAndHideOP(this._shoppingCartLogo);
  }

  movementArrowBackHeader() {
    this._showAndHideOP(this._backButtonHeader);
  }

  hideBackArrow() {
    this._backButtonHeader.classList.add("hidden");
  }

  movementHeader() {
    this._parentElementBody.firstElementChild.className === "productView"
      ? (header.className = "hidden")
      : header.classList.remove("hidden");
  }

  changeOverviewTitle(dealerArr, open) {
    const dealer = dealerArr.find((id) => +dealerArr.id === id.id);

    const openCart = open ? "Warenkorb" : "Ordersatz";
    const markup = `<span class="t4">${openCart} <span class="t3">// ${dealer.name}</span>`;
    this._title.innerHTML = markup;
    this._showAndHideOP(this._title);
  }

  resetHeader() {
    this._shoppingCartLogo.classList.add("hidden");
    this._title.innerHTML = `<span class="t1">Orderlist <span class="t2"> v2.0</span>`;
    this._backButtonHeader.classList.add("hidden");
  }
}

export default new HeaderView();
