"use strict";

export default class View {
  _parentElementBody = document.querySelector("#mainBody");
  _parentElementHeader = document.querySelector("#overview");
  _handlerAndTargets = {
    controlRenderShoCa: ".shoppingCartImg",
    controlRenderShoLi: ".listEntryContainer",
    controlRenderProduct: ".card",
  };
  _data;

  render(data) {
    if (data) {
      this._data = data;
      // const markup = this._generateMarkup();
      this._generateMarkup();

      // this._insertHTML(markup);
    }
  }

  addHandlerRender(handler) {
    const target = this._handlerAndTargets[handler.name];
    window.addEventListener("click", function (e) {
      const el = e.target.closest(target);
      if (!el) return;
      handler();
    });
  }

  _clear() {
    this._parentElementBody.innerHTML = "";
  }

  _insertHTML(markup) {
    this._clear();
    this._parentElementBody.insertAdjacentHTML("afterbegin", markup);
  }

  _showAndHideOP(el) {
    el.classList.remove("hidden");
    el.style.opacity = "0";
    el.style.transition = "opacity 0.2s";
    setTimeout(() => {
      el.style.opacity = "1";
    }, 0);
  }
}
