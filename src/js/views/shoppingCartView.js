"use strict";

import View from "./View.js";

class ShoppingCart extends View {
  _backButton;
  header = document.querySelector("#header");

  _generateMarkup() {
    const findEl = (data) => data.find((el) => el.id === +data.id);
    const dealer = findEl(this._data.dealer);

    let dealerCart = this._data.shoppingCart.find((d) => {
      if (d[dealer.name]) return d[dealer.name];
    });

    const cart = dealerCart[dealer.name].map((el) => {
      return `
      <li>
        <div class="listProductName">${el.name}</div>
        <div class="listProductQuantity">${el.quantity}</div>
        <div class="listProductUnit">${el.unit}</div>
        <div class="listTrashButton"></div>
      </li>`;
    });

    const markup = `
    <div class="shoppingCartArea">
      <div class="cartList">
        <ul>
            ${cart.join("")}
        </ul>
      </div>
    </div>  
    `;

    this._insertHTML(markup);
  }
}

export default new ShoppingCart();
