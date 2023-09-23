"use strict";

import View from "./View.js";

class DashboardView extends View {
  _headerDealerTitle = document.querySelector(".headerDealerTitle");

  addHandlerLoadDb(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    const generateDealer = this._data.map((dealer) => {
      return `
      <li class="card listEntryContainer" data-id="${dealer.id}" data-card="dealer">
      <div class="listEntry">
        <p class="pTitle">${dealer.name}</p>
        <div class="dealerLogo">
          <img
            src="${dealer.logoImg_src}"
            alt=""
          />
        </div>
        <p class="pLastUse">letzte Bestellung:</p>
        <p class="pDate">12.09.2023 - 20:15</p>
      </div>
    </li>
      `;
    });

    const markup = `
    <div class="dashboard">
    <div class="addDealer">
      <div class="inputContainer">
        <div class="inputAddDealer">
          <input
            type="text"
            id="inputDealer"
            placeholder="Händler hinzufügen"
          />
        </div>
        <div class="inputField">
          <div class="button button--addDealer">
            <div class="plus"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="myDealer">
      <p class="dealerTitle">Meine Händler</p>
      <p class="noDealer hidden">Du hast noch keinen Händler</p>
      <ul class="cards cardList">
      ${generateDealer.join("")}
      </ul>
    </div>
  </div>
    `;

    this._insertHTML(markup);
  }
}

export default new DashboardView();

// { <li class="card listEntryContainer">
//   <div class="listEntry">
//     <p class="pTitle">Lidl</p>
//     <div class="dealerLogo">
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/60px-Lidl-Logo.svg.png"
//         alt="Lidl logo"
//       />
//     </div>
//     <p class="pLastUse">letzte Bestellung:</p>
//     <p class="pDate">12.09.2023 - 20:15</p>
//   </div>
// </li>; }
