"use strict";

import View from "./View.js";
import * as model from "../model.js";

class DashboardView extends View {
  _headerDealerTitle = document.querySelector(".headerDealerTitle");
  // dealerName;

  addHandlerLoadDb(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    const generateDealer = this._data.dealer.map((dealer) => {
      let log;
      if (Object.keys(this._data.log).length !== 0)
        [log] = this._data.log[dealer.name].map((log) => log).splice(-1);
      return `
      <li class="card listEntryContainer" data-name="${dealer.name}" data-id="${
        dealer.id
      }" data-card="dealer">
      <div class="listEntry">
        <p class="pTitle">${dealer.name}</p>
        <div class="dealerLogo">
          <img
            src="${dealer.logoImg_src}"
            alt=""
          />
        </div>
        <p class="pLastUse">Letzte Bearbeitung:</p>
        <p class="pDate">${!log ? "Neue Liste" : log.timestamp}</p>
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

// ${this._data.timestamp ? this._data.timestamp : "Neue Liste."}
