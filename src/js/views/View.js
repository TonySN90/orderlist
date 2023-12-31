"use strict";

export default class View {
  _parentElementBody = document.querySelector("#mainBody");
  _parentElementHeader = document.querySelector("#overview");
  _handlerAndTargets = {
    controlRenderShoCa: ".shoppingCartImg",
    controlRenderShoLi: ".listEntryContainer",
    controlRenderProduct: ".shoppingListCard",
    controlLoadDb: ".menuMyDealer",
    controlLoadID: ".card",
  };

  _data;
  _from;

  render(data, fromPV = false) {
    if (data) {
      this._data = data;
      if (fromPV) this._from = fromPV;
      if (!fromPV) this._from = fromPV;
      this._generateMarkup();
    }
  }

  renderSpinner() {
    const markup = `
    <div class="custom-loader"></div>`;
    this._insertHTML(markup);
  }

  addHandlerRender(handler) {
    const target = this._handlerAndTargets[handler.name];
    window.addEventListener(
      "click",
      function (e) {
        const el = e.target.closest(target);

        if (!el) return;
        if (el.dataset) handler();
      }.bind(this)
    );
  }

  _clear() {
    this._parentElementBody.innerHTML = "";
  }

  _insertHTML(markup) {
    this._clear();
    this._parentElementBody.insertAdjacentHTML("afterbegin", markup);
  }

  _eff_opacity(el, s) {
    el.style.opacity = "0";
    el.style.transition = `opacity ${s}s`;
    setTimeout(() => {
      el.style.opacity = "1";
    }, 0);
  }

  _showAndHideOP(el, shown) {
    if (shown) el.classList.add("hidden");
    if (!shown) el.classList.remove("hidden");

    el.style.opacity = "0";
    el.style.transition = "opacity 0.2s";
    setTimeout(() => {
      el.style.opacity = "1";
    }, 0);
  }
}
