"use strict";

import View from "./View.js";
import * as model from "../model.js";

class ShoppinglistView extends View {
  _products;

  loadProductList(_product) {
    return this._products;
  }

  generateID() {
    const parentElement = document.querySelector(".cards");
    parentElement.addEventListener("click", function (e) {
      const id = e.target.closest(".card").dataset.id;
      return id;
    });
  }

  _generateMarkup() {
    const dealer = this._data.dealer.find(
      (el) => el.id === +this._data.dealer.id
    );

    this._products = dealer.products;

    const generateCard = dealer.products.map((data) => {
      return `
      <li class="card shoppingListCard" data-id="${
        data.id
      }" data-card="product">
        <div class="listEntry cardEntry"" >
          <div>
            <p class="cardTitle">${data.name}</p>
          </div>
          <img src="${data.image_src}" alt="Strawberry" />
          <div class="${
            data.bookmarked ? "heartFilled" : "heartBordered"
          } heart"></div>
          <div class="cardsShoppingCard">
            <div class="cartImg"></div>
          </div>
        </div>
      </li>
      
      `;
    });

    const markup = `
    <div class="shoppingArea">
    <div class="inputContainer inputSearch">
      <div class="inputAddDealer">
        <input type="text" id="textInputDealer" placeholder="Suche..." />
      </div>
      <div class="inputField">
        <div class="button button--addDealer">
          <div class="plus"></div>
        </div>
      </div>
    </div>

    <div class="smallMenu">
      <p>Alle</p>
      <p>Favoriten</p>
    </div>
    
    <ul class="cards cardProduct">
    ${generateCard.join("")}
    </ul>
    </div>`;

    this._insertHTML(markup);
  }
}

export default new ShoppinglistView();
