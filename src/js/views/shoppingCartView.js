"use strict";

import View from "./View.js";

class ShoppingCart extends View {
  header = document.querySelector("#header");
  _parentElementTrash;
  product;

  addHandlerDeleteProduct(del, change) {
    this._parentElementTrash.addEventListener("click", (e) => {
      let id = e.target.parentElement.dataset.id;
      this.product = e.target.closest(".listEntryCart").dataset.id;

      if (e.target.className === "trashImg") del();
      if (
        e.target.className === "listProductName" ||
        e.target.className === "listProductQuantity" ||
        e.target.className === "listProductUnit"
      ) {
        // this._from = true;
        change(id);
      } else return;
    });
  }

  _generateMarkup() {
    const findEl = (data) => data.find((el) => el.id === +data.id);
    const dealer = findEl(this._data.dealer);

    let dealerCart = this._data.shoppingCart.find((d) => {
      if (d[dealer.name]) return d[dealer.name];
    });

    const cart = dealerCart[dealer.name].map((el) => {
      return `
      <li class="listEntryCart" data-id="${el.id}">
        <div class="listProductName">${el.name}</div>
        <div class="listProductQuantity">${el.quantity}</div>
        <div class="listProductUnit">${el.unit}</div>
        <div class="listTrashButton">
          <div class="trashImg"></div>
        </div>
      </li>`;
    });

    const markup = `
    <div class="shoppingCartArea">
      <div class="cartListContainer">
        <ul class="cartList">
            ${cart.join("")}
        </ul>
      </div>
    </div>  
    `;

    this._insertHTML(markup);
    this._parentElementTrash = document.querySelector(".cartList");
  }
}

export default new ShoppingCart();
