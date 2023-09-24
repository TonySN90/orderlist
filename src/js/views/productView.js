"use strict";

import * as model from "../model.js";
import View from "./View.js";
import headerView from "./headerView.js";

class ProductView extends View {
  _backButton;
  _plusButton;
  _minusButton;
  _quanContainer;
  _heartButton;
  _addButton;

  addHandlerAddBookmark(handler) {
    this._heartButton.addEventListener("click", handler);
  }

  AddToShoppingCart(handler) {
    this._addButton.addEventListener("click", handler);
  }

  addHandlerBack(handler) {
    this._backButton.addEventListener("click", handler);
  }

  addHandlerChangeQuantity(handler) {
    this._quanContainer.addEventListener("click", function (e) {
      if (e.target.closest(".quanPlus")) handler("+");
      if (e.target.closest(".quanMinus")) handler("-");
    });
  }

  _generateMarkup() {
    // console.log(product.bookmarked);
    const product = this._data.product.find(
      (pro) => pro.id === +this._data.product.id
    );

    console.log(product);
    const markup = `
    <div class="productView">
    <div class="productImgSection">
      <div class="arrBack"></div>
      <div class="heart ${
        product.bookmarked ? "heartFilledProduct" : "heartBorderedProduct"
      } heartBtn"></div>
      <div class="productImgContainer">
        <img
          src="${product.image_src}"
          alt=""
        />
      </div>
    </div>
    <div class="productSection">
      <div class="productTitle">
        <h1>${product.name}</h1>
        <div class="units">
          <div class="unitSelection">
            <h3>Netz</h3>
          </div>
          <div class="quantityContainer">
            <div class="quanMinus quanButton">
              <p>-</p>
            </div>
            <div class="quantity">${this._data.quantityNumber}</div>
            <div class="quanPlus quanButton"><p>+</p>
            </div>
          </div>
        </div>
        <div class="productDescription">
          <h3>Produkt Beschreibung</h3>
          <p>
        ${
          product.description
            ? product.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio, assumenda eius amet, eum error sunt officiis iurequas dignissimos itaque, quo ut veritatis necessitatibus quiapossimus. Sit ex dolore sed."
        }
          </p>
        </div>
        <div class="addButton"><p>Hinzufügen</p></div>
      </div>
    </div>
  </div>
    `;

    this._insertHTML(markup);
    this._backButton = document.querySelector(".arrBack");
    this._plusButton = document.querySelector(".quanPlus");
    this._minusButton = document.querySelector(".quanMinus");
    this._quanContainer = document.querySelector(".quantityContainer");
    this._heartButton = document.querySelector(".heartBtn");
    this._addButton = document.querySelector(".addButton");
  }
}

export default new ProductView();

// {/* <p>
// Lorem ipsum dolor sit amet consectetur adipisicing elit.
// Distinctio, assumenda eius amet, eum error sunt officiis iure
// quas dignissimos itaque, quo ut veritatis necessitatibus quia
// possimus. Sit ex dolore sed.
// </p> */}
