"use strict";

import View from "./View.js";

class ProductView extends View {
  _backButton;
  _plusButton;
  _minusButton;
  _quanContainer;
  _heartButton;
  _addButton;
  _unitValue;
  unitValueReturn;
  _quantity;
  _unfoldTextButton;
  _partialText;
  _fullText;

  addHandlerAddBookmark(handler) {
    this._heartButton.addEventListener("click", handler);
  }

  AddToShoppingCart(handler) {
    this._addButton.addEventListener("click", () => {
      if (this._from) handler(true);
      else handler(false);
    });
  }

  addHandlerBack(handler) {
    this._backButton.addEventListener("click", () => {
      if (this._from) handler(true);
      else handler(false);
    });
  }

  addHandlerChangeQuantity(handler, from) {
    this._quanContainer.addEventListener("click", function (e) {
      if (e.target.closest(".quanPlus")) handler("+", from);
      if (e.target.closest(".quanMinus")) handler("-", from);
    });
  }

  displayQuantity(quantity) {
    this._quantity.innerHTML = quantity;
  }

  addHandlerSelectUnit(handler) {
    this._unitButton.addEventListener("click", handler);
  }

  displayUnitSelectList() {
    document
      .querySelector(".unitSelectListContainer")
      .classList.toggle("hidden");

    document
      .querySelector(".buttonArrowDown ")
      .classList.toggle("btnTransform");
  }

  selectUnit() {
    const unitListItems = this._unitSelectList.querySelectorAll("li");
    unitListItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        this._unitValue.innerHTML = this.unitValueReturn = e.target.innerHTML;
      });
    });
  }

  unfoldText() {
    this._unfoldTextButton.addEventListener("click", () => {
      this._unfoldTextButton.classList.toggle("btnT180deg");
      // setTimeout(() => {
      this._partialText.classList.toggle("hidden");
      this._fullText.classList.toggle("hidden");

      this._eff_opacity(this._fullText, ".3");
      this._eff_opacity(this._partialText, ".3");
      // }, 500);
    });
  }

  _generateMarkup() {
    const product = this._data.product.find(
      (pro) => pro.id === +this._data.product.id
    );

    const units = this._data.units.map((unit) => {
      return `<li>${unit}</li>`;
    });

    this._fullText = `${
      product.description
        ? product.description
        : "Keine Beschreibung vorhanden."
    }`;

    const splitText = function (text, lines) {
      const textArray = text.split(" ");
      return `${textArray.slice(0, lines).join(" ")}...`;
    };

    const initialText = splitText(this._fullText, 30);
    this._partialText = initialText;

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
            <h3 class="unitValue">${product.unit}</h3>
            <div class="buttonArrowDown">
              <div class="arrLeft arrBoth"></div>
              <div class="arrRight arrBoth"></div>
            </div>
            <div class="unitSelectListContainer hidden">
              <ul class="unitSelectList">
                ${units.join("")}
              </ul>
            </div>
          </div>
          <div class="addButton"><p>Hinzufügen</p></div>
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
          <p class="partialText">${this._partialText}</p>
          <p class="fullText hidden">${this._fullText}</p>
          <div class="unfold">
            <div class="buttonArrowDown unfoldTextButton">
              <div class="arrLeft arrBoth"></div>
              <div class="arrRight arrBoth"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    this._insertHTML(markup);
    this._backButton = document.querySelector(".arrBack");
    this._plusButton = document.querySelector(".quanPlus");
    this._minusButton = document.querySelector(".quanMinus");
    this._quantity = document.querySelector(".quantity");
    this._quanContainer = document.querySelector(".quantityContainer");
    this._quantButton = document.querySelector(".arrDown");
    this._heartButton = document.querySelector(".heartBtn");
    this._addButton = document.querySelector(".addButton");
    this._unitButton = document.querySelector(".unitSelection");
    this._unitSelectList = document.querySelector(".unitSelectListContainer");
    this._unitValue = document.querySelector(".unitValue");
    this._partialText = document.querySelector(".partialText");
    this._fullText = document.querySelector(".fullText");
    this._unfoldTextButton = document.querySelector(".unfoldTextButton");
  }
}

export default new ProductView();
