// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _dashboardView = require("./views/dashboardView");
var _dashboardViewDefault = parcelHelpers.interopDefault(_dashboardView);
var _productView = require("./views/productView");
var _productViewDefault = parcelHelpers.interopDefault(_productView);
var _shoppingCartView = require("./views/shoppingCartView");
var _shoppingCartViewDefault = parcelHelpers.interopDefault(_shoppingCartView);
var _shoppinglistView = require("./views/shoppinglistView");
var _shoppinglistViewDefault = parcelHelpers.interopDefault(_shoppinglistView);
var _headerView = require("./views/headerView");
var _headerViewDefault = parcelHelpers.interopDefault(_headerView);
var _menuViewJs = require("./views/menuView.js");
var _menuViewJsDefault = parcelHelpers.interopDefault(_menuViewJs);
"use strict";
const controlBackToDB = function() {
    (0, _dashboardViewDefault.default).renderSpinner();
    setTimeout(function() {
        (0, _dashboardViewDefault.default).render(_modelJs.state);
        (0, _headerViewDefault.default).movementCartLogo();
        _modelJs.loadID();
        (0, _headerViewDefault.default).resetHeader();
        (0, _menuViewJsDefault.default).hideMenuEntry_Clear();
    }, 400);
};
const controlCLearShoppingCart = function() {
    _modelJs.clearShoppingList();
    controlRenderShoLi();
    (0, _headerViewDefault.default).hideBackArrow();
    _modelJs.createLogEntry();
// fixing bug
};
const controlMenu = function() {
    (0, _menuViewJsDefault.default).toDealer(controlBackToDB);
    (0, _menuViewJsDefault.default).addHandlerClearShoppingList(controlCLearShoppingCart);
    (0, _headerViewDefault.default).resetHeader();
};
const controlAddBookmark = function() {
    _modelJs.addBookmark(_modelJs.state.product);
    controlRenderProduct();
};
const controlAddToShoppingCart = function(fromCart) {
    _modelJs.addProductToCart();
    if (fromCart) controlRenderShoCa();
    if (!fromCart) controlRenderShoLi();
    (0, _headerViewDefault.default).movementHeader();
    _modelJs.createLogEntry();
    _modelJs.saveLocal();
};
const controlDeleteProduct = function() {
    _modelJs.deleteProduct((0, _shoppingCartViewDefault.default).product);
    controlRenderShoCa();
};
const controlLoadDb = function() {
    (0, _dashboardViewDefault.default).renderSpinner();
    setTimeout(function() {
        _modelJs.loadDealerList();
        (0, _dashboardViewDefault.default).render(_modelJs.state);
        _modelJs.loadID();
        _modelJs.createShoppingCart();
        (0, _dashboardViewDefault.default).addHandlerRender(controlRenderShoLi);
    }, 200);
};
const controlClickBack = function(fromCart) {
    if (fromCart) controlRenderShoCa();
    if (!fromCart) controlRenderShoLi();
    (0, _headerViewDefault.default).movementHeader();
};
const controlUnitSelectList = function() {
    (0, _productViewDefault.default).displayUnitSelectList();
    (0, _productViewDefault.default).selectUnit();
};
const controlAddProductToShoLi = function(value) {
    _modelJs.addToProductList(value);
    controlRenderShoLi();
// Validierung einfügen!!!!!!!!!!!!!!!!!!!!!!!!!!
};
const controlScroll = function() {
    _modelJs.saveScrollPosition();
};
const controlRenderShoLi = function() {
    (0, _shoppinglistViewDefault.default).renderSpinner();
    setTimeout(function() {
        (0, _shoppinglistViewDefault.default).render(_modelJs.state);
        _modelJs.resetQuantityNumber();
        (0, _shoppinglistViewDefault.default).addHandlerRender(controlRenderProduct);
        (0, _dashboardViewDefault.default).addHandlerRender(controlRenderShoCa);
        (0, _headerViewDefault.default).movementCartLogo();
        (0, _headerViewDefault.default).changeOverviewTitle(_modelJs.state.dealer);
        _modelJs.loadID(_modelJs.state);
        _modelJs.loadCurDealer();
        _modelJs.loadProductList();
        (0, _shoppinglistViewDefault.default).addToShoppingList(controlAddProductToShoLi);
        (0, _menuViewJsDefault.default).displayMenuEntry_Clear();
        _modelJs.loadScrollPosition();
    }, 300);
};
const controlQuantity = function(operator) {
    _modelJs.changeQuantity(operator);
    (0, _productViewDefault.default).displayQuantity(_modelJs.state.quantityNumber);
};
const controlRenderProduct = function(from = false) {
    (0, _productViewDefault.default).renderSpinner();
    setTimeout(function() {
        (0, _productViewDefault.default).render(_modelJs.state, from);
        (0, _productViewDefault.default).addHandlerBack(controlClickBack);
        (0, _headerViewDefault.default).movementHeader();
        (0, _productViewDefault.default).addHandlerChangeQuantity(controlQuantity, from);
        (0, _productViewDefault.default).addHandlerAddBookmark(controlAddBookmark);
        (0, _productViewDefault.default).AddToShoppingCart(controlAddToShoppingCart);
        (0, _productViewDefault.default).addHandlerSelectUnit(controlUnitSelectList);
        (0, _productViewDefault.default).unfoldText();
    }, 150);
};
// const productHelper() {
// }
const controlBackToPV = function(productID) {
    // model.load(productID);
    (0, _productViewDefault.default).renderSpinner();
    setTimeout(function() {
        _modelJs.resetQuantityNumber();
        _modelJs.state.product.id = productID;
        (0, _productViewDefault.default).render(_modelJs.state, true);
        (0, _productViewDefault.default).addHandlerBack(controlClickBack);
        (0, _productViewDefault.default).addHandlerChangeQuantity(controlQuantity, true);
        (0, _productViewDefault.default).addHandlerAddBookmark(controlAddBookmark);
        (0, _productViewDefault.default).AddToShoppingCart(controlAddToShoppingCart);
        (0, _productViewDefault.default).addHandlerSelectUnit(controlUnitSelectList);
        (0, _headerViewDefault.default).movementHeader();
        (0, _headerViewDefault.default).resetHeader();
    }, 200);
// ÜBERARBEITEN
};
const controlRenderShoCa = function() {
    (0, _shoppingCartViewDefault.default).renderSpinner();
    setTimeout(function() {
        (0, _shoppingCartViewDefault.default).render(_modelJs.state, true);
        (0, _headerViewDefault.default).changeOverviewTitle(_modelJs.state.dealer, true);
        (0, _headerViewDefault.default).movementArrowBackHeader();
        (0, _headerViewDefault.default).addHandlerBack(controlClickBack);
        (0, _shoppingCartViewDefault.default).addHandlerDeleteProduct(controlDeleteProduct, controlBackToPV);
    }, 200);
};
const init = function() {
    _modelJs.loadStorage();
    (0, _dashboardViewDefault.default).addHandlerLoadDb(controlLoadDb);
    (0, _menuViewJsDefault.default).toggleMenu();
    controlMenu();
    (0, _shoppinglistViewDefault.default).addHandlerScroll(controlScroll);
};
init();

},{"./model.js":"Y4A21","./views/dashboardView":"ie8VL","./views/productView":"7Qur4","./views/shoppingCartView":"b2ZMo","./views/shoppinglistView":"5AeHu","./views/headerView":"1wq1u","./views/menuView.js":"lg0TE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state2", ()=>state2);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "changeQuantity", ()=>changeQuantity);
parcelHelpers.export(exports, "resetQuantityNumber", ()=>resetQuantityNumber);
parcelHelpers.export(exports, "loadDealerList", ()=>loadDealerList);
parcelHelpers.export(exports, "loadProductList", ()=>loadProductList);
parcelHelpers.export(exports, "resetCurUnit", ()=>resetCurUnit);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "createShoppingCart", ()=>createShoppingCart);
parcelHelpers.export(exports, "addProductToCart", ()=>addProductToCart);
parcelHelpers.export(exports, "createLogEntry", ()=>createLogEntry);
parcelHelpers.export(exports, "deleteProduct", ()=>deleteProduct);
parcelHelpers.export(exports, "clearShoppingList", ()=>clearShoppingList);
parcelHelpers.export(exports, "saveScrollPosition", ()=>saveScrollPosition);
parcelHelpers.export(exports, "loadScrollPosition", ()=>loadScrollPosition);
parcelHelpers.export(exports, "loadID", ()=>loadID);
parcelHelpers.export(exports, "loadCurDealer", ()=>loadCurDealer);
parcelHelpers.export(exports, "addToProductList", ()=>addToProductList);
parcelHelpers.export(exports, "saveLocal", ()=>saveLocal);
parcelHelpers.export(exports, "loadStorage", ()=>loadStorage);
var _config = require("./config");
var _data = require("./data");
var _menuView = require("./views/menuView");
var _menuViewDefault = parcelHelpers.interopDefault(_menuView);
var _shoppinglistView = require("./views/shoppinglistView");
var _shoppinglistViewDefault = parcelHelpers.interopDefault(_shoppinglistView);
"use strict";
let state2 = {};
let state = {
    dealer: {
        id: null,
        timestamp: []
    },
    product: {
        id: null,
        bookmarked: false
    },
    log: {
        Beka: [],
        Lidl: []
    },
    shoppingCart: [],
    bookmarks: {
        Lidl: [],
        Beka: []
    },
    quantityNumber: 1,
    curDealer: ""
};
let curScrollPos;
const changeQuantity = function(operator) {
    if (state.quantityNumber >= 1) {
        if (operator === "+") state.quantityNumber++;
        if (operator === "-") state.quantityNumber--;
    }
    if (state.quantityNumber === 0 & operator === "+") state.quantityNumber++;
};
const resetQuantityNumber = function() {
    state.quantityNumber = 1;
};
const loadDealerList = function() {
    state.dealer = (0, _data.dataDealer);
    state.units = (0, _data.unitList);
};
const loadProductList = function() {
    const productList = (0, _shoppinglistViewDefault.default).loadProductList();
    state.product = productList;
};
const resetCurUnit = function() {
    state.product.unit = "test";
};
const addBookmark = function(data) {
    const product = data.find((el)=>el.id === +data.id);
    product.bookmarked = product.bookmarked ? false : true;
    saveLocal();
};
const createShoppingCart = function(data) {
    state.dealer.forEach((dealer)=>{
        if (state.shoppingCart.length === state.dealer.length) return;
        else state.shoppingCart.push({
            [dealer.name]: []
        });
    });
};
const findEl = (data)=>data.find((el)=>el.id === +data.id);
const addProductToCart = function() {
    const dealer = findEl(state.dealer);
    const product = findEl(state.product);
    const productFull = {
        ...product,
        quantity: state.quantityNumber
    };
    productFull.unit = document.querySelector(".unitValue").innerHTML;
    // ÜBERARBEITEN ---------------------------------------------------------
    state.shoppingCart.forEach((cart)=>{
        if (cart[dealer.name]) {
            const productIndex = cart[dealer.name].findIndex((product)=>product.id === productFull.id);
            if (productIndex !== -1) cart[dealer.name][productIndex] = productFull;
            else cart[dealer.name].push(productFull);
        }
    });
    saveLocal();
};
const createLogEntry = function() {
    const weekdays = [
        "So",
        "Mo",
        "Di",
        "Mi",
        "Do",
        "Fr",
        "Sa"
    ];
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    // const weekday = weekdays[+day - 1];
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timestamp = `${day}.${month}.${year} - ${hour}:${minutes}`;
    const obj = {
        user: "User",
        timestamp: timestamp
    };
    state.log[state.curDealer].push(obj);
    saveLocal();
};
const deleteProduct = function(id) {
    const dealer = state.shoppingCart.find((dealers)=>dealers[state.curDealer]);
    if (dealer && dealer[state.curDealer]) dealer[state.curDealer] = dealer[state.curDealer].filter((product)=>{
        return product.id !== +id;
    });
    saveLocal();
};
const clearShoppingList = function() {
    state.shoppingCart.forEach((cart)=>{
        if (cart[state.curDealer]) cart[state.curDealer] = [];
    });
    (0, _menuViewDefault.default).openCloseMenu();
    saveLocal();
};
const saveScrollPosition = function() {
    curScrollPos = window.scrollY;
};
const loadScrollPosition = function() {
    window.scrollTo({
        top: curScrollPos,
        left: 0,
        behavior: "smooth"
    });
};
const loadID = function() {
    const parentElement = document.querySelector(".cards");
    parentElement.addEventListener("click", function(e) {
        const id = e.target.closest(".card").dataset.id;
        if (!id) return;
        if (e.target.closest(".card").dataset.card === "dealer") state.dealer.id = id;
        state.product.id = id;
    });
};
const loadCurDealer = function() {
    const dealer = state.dealer.find((dealer)=>+state.dealer.id === dealer.id);
    state.curDealer = dealer.name;
};
const addToProductList = function(value) {
    const generateID = function() {
        let IDs = [];
        state.product.forEach((pro)=>IDs.push(pro.id));
        let newID;
        do newID = Math.floor(2000 + Math.random() * 1000).toString();
        while (IDs.includes(+newID));
        return +newID;
    };
    const obj = {
        id: generateID(),
        name: `${value}`,
        unit: "St\xfcck",
        category: "other",
        image_src: "https://media.istockphoto.com/id/505408074/de/foto/gro%C3%9Fen-weidenkorb-mit-bio-produkten.jpg?s=612x612&w=0&k=20&c=PhJBvDvSZ5XAXSEYZ5kIH3nNHK_Et1m6WfuJY8lRTJA="
    };
    state.product.push(obj);
// saveLocal();
};
const saveLocal = function() {
    localStorage.setItem("orderlistV2", JSON.stringify(state));
};
const loadStorage = function() {
    let storage = localStorage.getItem("orderlistV2");
    // console.log("Storage:", JSON.parse(storage));
    if (!storage) return;
    state = JSON.parse(storage);
// console.log(state);
};
const timeout = function(s = 2.5) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
}; // const getJSON = async function (url) {
 //   try {
 //     const res = await Promise.race([fetch(url), timeout()]);
 //     const data = await res.json();
 //     console.log(data);
 //     return data;
 //   } catch (err) {
 //     console.error(err.message);
 //   }
 // };
 // const loadProduct = async function (id) {
 //   const data = await getJSON(`${API_URL}?query=banana&apiKey=${API_KEY}`);
 //   console.log(data.results);
 // };
 // loadProduct();

},{"./config":"k5Hzs","./data":"kq51T","./views/menuView":"lg0TE","./views/shoppinglistView":"5AeHu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
"use strict";
const API_KEY = "ad49a71315b9415287592e51c7b3c3f1";
const API_URL = "https://api.spoonacular.com/food/ingredients/search"; // export const API_URL = "https://api.pexels.com/v1/search";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kq51T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "productsLidl", ()=>productsLidl);
parcelHelpers.export(exports, "productsBeka", ()=>productsBeka);
parcelHelpers.export(exports, "dataDealer", ()=>dataDealer);
parcelHelpers.export(exports, "unitList", ()=>unitList);
let productsLidl = [
    {
        id: 1001,
        name: "Eisbergsalat",
        unit: "Kiste",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/0482595/24570316_digital-image.png?impolicy=s-products&imwidth=200&output-format=image/webp",
        description: 'Eisbergsalat stellt eine besondere Z\xfcchtung des Kopfsalats dar. Er bildet gr\xf6\xdfere K\xf6pfe mit spr\xf6den, aber saftigen Bl\xe4ttern, die gl\xe4nzen und dicht aneinander liegen. Die Farbe variiert von hell- bis dunkelgr\xfcn. Vorwiegend aus Deutschland, Niederlande, Italien und Spanien. Herzhaft frisch und knackig. Das wasserreiche Gewebe der Bl\xe4tter vermittelt den Eindruck von K\xfchle und Frische. Als Salat pur genie\xdfen oder auch f\xfcr Mischsalate geeignet. Der Eisbergsalat kann einige Zeit vor dem Verzehr ohne Qualit\xe4tsverluste zubereitet werden. Der Eisbergsalat ist aufgrund seiner Blattstruktur haltbarer als Kopfsalatarten. Er sollte im K\xfchlschrank gelagert werden. In den Wintermonaten ist aus den Niederlanden eine Variante mit dem Namen "Crisp-Salat" erh\xe4ltlich. Dies ist Eisbergsalat, der mit H\xfcllbl\xe4ttern angeboten wird.'
    },
    {
        id: 1002,
        name: "Tomaten",
        unit: "Netz",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/1186400/8599550_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "Ursprungsland und Handelsklasse k\xf6nnen je nach Angebot abweichen. Strauch-, Rispen- oder Buschtomaten sind Tomaten, die mit Kelch und Stielen geerntet werden. Es gibt Cherry-, Roma- und runde Tomaten mit Rispe. Vorwiegend aus Spanien, Italien, Frankreich, Niederlande, Marokko, Belgien und Deutschland."
    },
    {
        id: 1003,
        name: "Gurken",
        unit: "Kiste",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/0708720/7360590_digital-image.png?impolicy=s-products&imwidth=464&output-format=image/webp",
        description: "Gurken sind eine beliebte Gem\xfcsesorte, die zur Familie der K\xfcrbisgew\xe4chse (Cucurbitaceae) geh\xf6rt. Sie haben eine glatte, gr\xfcne Haut, obwohl es auch Sorten mit gelber oder wei\xdfer Haut gibt. Gurken sind in der Regel l\xe4nglich und k\xf6nnen eine L\xe4nge von etwa 15 bis 30 Zentimetern haben. Das Innere der Gurke ist saftig und knackig, w\xe4hrend die gr\xfcne Haut manchmal leicht bitter sein kann. Gurken haben einen erfrischenden und milden Geschmack, der sie zu einer beliebten Zutat in Salaten, Sandwiches und Sushi-Rollen macht. Sie k\xf6nnen auch eingelegt werden, um saure Gurken herzustellen, oder in Suppen und Gazpacho-Suppen verarbeitet werden. Einige K\xfcchen verwenden Gurken auch in gekochten oder ged\xfcnsteten Gerichten. In Bezug auf N\xe4hrstoffe sind Gurken kalorienarm und enthalten eine gute Menge an Vitaminen und Mineralstoffen wie Vitamin K, Vitamin C, Kalium und Fols\xe4ure. Sie sind auch reich an Wasser, was zur Hydratation beitr\xe4gt. Die in Gurken enthaltenen Antioxidantien k\xf6nnen dazu beitragen, den K\xf6rper vor freien Radikalen zu sch\xfctzen, und die Ballaststoffe in Gurken k\xf6nnen die Verdauung f\xf6rdern. Gurken sollten im K\xfchlschrank aufbewahrt werden, um ihre Frische zu erhalten, und k\xf6nnen in Plastikfolie oder einem Plastikbeutel verpackt werden, um das Austrocknen zu verhindern. In der K\xfcche sind Gurken vielseitig einsetzbar und werden weltweit in verschiedenen kulinarischen Traditionen gesch\xe4tzt. Sie sind ein gesundes und erfrischendes Gem\xfcse, das oft in der warmen Jahreszeit genossen wird."
    },
    {
        id: 1004,
        name: "Orangen",
        unit: "Netz",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/8076862/29833725_digital-image.png?impolicy=s-products&imwidth=200&output-format=image/webp",
        description: "Orangen sind saftige Zitrusfr\xfcchte, die zur Familie der Rutaceae geh\xf6ren. Sie sind bekannt f\xfcr ihre lebendig orange Farbe und ihren s\xfc\xdf-s\xe4uerlichen Geschmack. Die \xe4u\xdfere Schale der Orange ist oft leicht rau und texturiert, w\xe4hrend das Innere in mehrere Segmente unterteilt ist, die von einer d\xfcnnen, leicht abziehbaren Haut umgeben sind. Der Geschmack von Orangen ist s\xfc\xdf und erfrischend, mit einem leicht s\xe4uerlichen Unterton, der ihnen ihren charakteristischen Geschmack verleiht. Sie sind eine ausgezeichnete Quelle f\xfcr Vitamin C, ein Antioxidans, das die Immunfunktion st\xe4rkt und zur Kollagenbildung beitr\xe4gt. Orangen enthalten auch Ballaststoffe, die die Verdauung f\xf6rdern, sowie andere Vitamine und Mineralien wie Vitamin A, Kalium und Fols\xe4ure. Orangen werden oft frisch gegessen, indem man die Schale entfernt und die saftigen Segmente isst. Sie werden auch zu Saft gepresst, der ein beliebtes Getr\xe4nk ist und reich an Vitamin C ist. Orangensaft wird auch in vielen Cocktails und Mixgetr\xe4nken verwendet. Diese Fr\xfcchte sind vielseitig in der K\xfcche und k\xf6nnen in einer Vielzahl von Gerichten und Desserts verwendet werden. Ihr erfrischender Geschmack macht sie zu einer beliebten Zutat in Salaten, Obstsalaten, Marmeladen, Desserts und sogar herzhaften Gerichten wie H\xfchnchen mit Orangensauce. Orangen sind ganzj\xe4hrig verf\xfcgbar und werden in vielen Teilen der Welt angebaut. Sie sind nicht nur k\xf6stlich, sondern auch eine gesunde Erg\xe4nzung zu einer ausgewogenen Ern\xe4hrung aufgrund ihrer reichen N\xe4hrstoffzusammensetzung."
    },
    {
        id: 1005,
        name: "Zitronen",
        unit: "Netz",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/8666238/38578646_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "Zitronen sind saure Zitrusfr\xfcchte, die zur Familie der Rutaceae geh\xf6ren. Sie sind bekannt f\xfcr ihre leuchtend gelbe Farbe und ihren erfrischenden, sauren Geschmack. Die \xe4u\xdfere Schale der Zitrone ist glatt und d\xfcnn und hat eine helle gelbe Farbe. Das Innere der Zitrone ist in Segmente unterteilt, die von einer saftigen, zitronigen Fruchtfleischmasse umgeben sind. Der Geschmack von Zitronen ist stark sauer und erfrischend. Sie sind eine ausgezeichnete Quelle f\xfcr Vitamin C, ein Antioxidans, das die Immunfunktion st\xe4rkt und zur Kollagenbildung beitr\xe4gt. Zitronen enthalten auch andere Vitamine und Mineralstoffe wie Vitamin A, Vitamin B6, Fols\xe4ure, Kalium und Ballaststoffe. Zitronen werden auf vielf\xe4ltige Weise in der K\xfcche verwendet. Ihr Saft und ihre Schale werden h\xe4ufig als W\xfcrzmittel und Aromastoffe in einer breiten Palette von Gerichten eingesetzt. Zitronensaft wird oft in Dressings, Marinaden, So\xdfen, Getr\xe4nken und Desserts verwendet. Die Schale kann gerieben oder in d\xfcnnen Streifen als Zesten f\xfcr zus\xe4tzliches Aroma verwendet werden. Zitronen sind auch eine beliebte Zutat in Getr\xe4nken, von Zitronenwasser bis hin zu Limonaden und Cocktails. Ihr erfrischender Geschmack verleiht vielen Rezepten eine helle, zitrusartige Note. Diese Fr\xfcchte sind das ganze Jahr \xfcber erh\xe4ltlich und werden in vielen Teilen der Welt angebaut. Aufgrund ihres unverwechselbaren Geschmacks und ihrer vielf\xe4ltigen Verwendungsm\xf6glichkeiten sind Zitronen ein beliebtes Lebensmittel in der K\xfcche und finden sich in vielen kulinarischen Traditionen weltweit."
    },
    {
        id: 1006,
        name: "Paprika",
        unit: "St\xfcck",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/0293205/8578590_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "Paprika sind eine Gruppe von Gem\xfcsesorten, die zur Familie der Nachtschattengew\xe4chse (Solanaceae) geh\xf6ren. Sie sind in verschiedenen Farben, Formen und Gr\xf6\xdfen erh\xe4ltlich, darunter rot, gr\xfcn, gelb, orange, lila und sogar braun. Diese Vielfalt an Farben verleiht ihnen eine auff\xe4llige und attraktive Erscheinung. Das Fruchtfleisch von Paprika ist fest und saftig, und es gibt normalerweise zahlreiche kleine Samen im Inneren. Der Geschmack von Paprika variiert je nach Farbe und Reifegrad. Gr\xfcne Paprika sind in der Regel etwas bitterer und weniger s\xfc\xdf als reife Paprika in anderen Farben, wie Rot, Gelb oder Orange. Diese reifen Paprikasorten haben einen s\xfc\xdferen, fruchtigeren Geschmack. Paprika sind eine hervorragende Quelle f\xfcr Vitamine und Antioxidantien, insbesondere Vitamin C, das zur St\xe4rkung des Immunsystems beitr\xe4gt. Sie enthalten auch Vitamin A, Vitamin B6, Fols\xe4ure und verschiedene Mineralstoffe wie Kalium und Eisen. Dar\xfcber hinaus sind Paprika ballaststoffreich und k\xf6nnen zur F\xf6rderung der Verdauung beitragen. In der K\xfcche werden Paprika auf vielf\xe4ltige Weise verwendet. Sie k\xf6nnen roh in Salaten, Wraps oder als Snack serviert werden. Sie eignen sich hervorragend zum F\xfcllen mit einer Mischung aus Fleisch, Reis und Gem\xfcse und werden dann oft gegrillt oder gebacken. Paprika sind auch eine wichtige Zutat in vielen internationalen Gerichten wie italienischer Paprikasalat, mexikanischer Fajitas oder spanischer Paella. Paprika sind das ganze Jahr \xfcber in den meisten Lebensmittelgesch\xe4ften erh\xe4ltlich und sind ein vielseitiges und gesundes Gem\xfcse, das in vielen verschiedenen kulinarischen Traditionen gesch\xe4tzt wird. Ihre lebendigen Farben, der reiche Geschmack und die ern\xe4hrungsphysiologischen Vorteile machen sie zu einer beliebten Wahl in der K\xfcche."
    },
    {
        id: 1007,
        name: "M\xf6hren",
        category: "vegAndFruit",
        unit: "Beutel",
        image_src: "https://img.rewe-static.de/8339524/30105634_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "M\xf6hren sind eine vielseitige und beliebte Gem\xfcsesorte, die zur Familie der Doldenbl\xfctler (Apiaceae) geh\xf6rt. Sie sind in verschiedenen Gr\xf6\xdfen und Farben erh\xe4ltlich, wobei die gebr\xe4uchlichste Farbe ein tiefes Orange ist. M\xf6hren haben eine charakteristische zylindrische Form und eine glatte, feste Haut. Das Innere der M\xf6hre besteht aus saftigem, knackigem Fruchtfleisch, das s\xfc\xdf und leicht erdig schmeckt. Der Geschmack kann je nach Sorte und Reifegrad variieren, aber im Allgemeinen sind M\xf6hren ein angenehm s\xfc\xdfes Gem\xfcse. Die orangefarbene Farbe der M\xf6hren ist auf das Vorhandensein von Beta-Carotin zur\xfcckzuf\xfchren, einem Vorl\xe4ufer von Vitamin A, das wichtig f\xfcr die Augengesundheit ist. M\xf6hren sind eine ausgezeichnete Quelle f\xfcr verschiedene N\xe4hrstoffe, darunter Vitamin A, Vitamin K, Kalium und Ballaststoffe. Sie sind kalorienarm und eine gesunde Erg\xe4nzung zu einer ausgewogenen Ern\xe4hrung. Vitamin A aus M\xf6hren ist wichtig f\xfcr die Sehkraft und die Gesundheit der Haut. In der K\xfcche werden M\xf6hren auf vielf\xe4ltige Weise zubereitet. Sie k\xf6nnen roh als Snack gegessen, in Salaten gerieben oder zu Gem\xfcsesticks verarbeitet werden. M\xf6hren eignen sich auch hervorragend zum Kochen, D\xe4mpfen, Braten oder Backen. Sie sind eine wichtige Zutat in vielen Gerichten wie Suppen, Eint\xf6pfen, Stir-Frys und Gem\xfcsebeilagen. M\xf6hren sind das ganze Jahr \xfcber in den meisten Lebensmittelgesch\xe4ften erh\xe4ltlich und sind aufgrund ihrer S\xfc\xdfe, ihres knackigen Bisses und ihrer gesundheitlichen Vorteile ein gesch\xe4tztes Gem\xfcse in der K\xfcche. Sie sind auch ein beliebtes Gem\xfcse f\xfcr Kinder, da sie leicht verdaulich und schmackhaft sind."
    },
    {
        id: 1008,
        name: "\xc4pfel",
        unit: "Sack",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/0005428/27448814_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "\xc4pfel sind eine der weltweit am h\xe4ufigsten konsumierten Obstsorten und geh\xf6ren zur Gattung Malus innerhalb der Familie der Rosengew\xe4chse (Rosaceae). Sie sind f\xfcr ihre charakteristische runde Form, ihre glatte Haut und ihr vielf\xe4ltiges Farbspektrum bekannt, das von Rot \xfcber Gelb bis hin zu Gr\xfcn reicht. Das Fruchtfleisch eines Apfels ist saftig und fest, und in der Mitte befindet sich ein Kerngeh\xe4use mit Samen. Der Geschmack von \xc4pfeln variiert je nach Sorte, kann aber von s\xfc\xdf und mild bis hin zu s\xe4uerlich und erfrischend reichen. Die Haut kann d\xfcnn und knusprig oder dicker und z\xe4her sein, je nach Sorte. \xc4pfel sind nicht nur k\xf6stlich, sondern auch nahrhaft. Sie sind eine ausgezeichnete Quelle f\xfcr Ballaststoffe, insbesondere Pektin, das zur Verdauung beitr\xe4gt und ein S\xe4ttigungsgef\xfchl f\xf6rdert. \xc4pfel enthalten auch Vitamine wie Vitamin C, Vitamin A und verschiedene B-Vitamine. Dar\xfcber hinaus sind sie reich an Antioxidantien, die zur Bek\xe4mpfung von freien Radikalen im K\xf6rper beitragen. In der K\xfcche sind \xc4pfel \xe4u\xdferst vielseitig. Sie k\xf6nnen roh gegessen werden, als Snack oder in Salaten. \xc4pfel werden jedoch auch in vielen Koch- und Backrezepten verwendet, von Apfelpfannkuchen \xfcber Apfelkuchen bis hin zu Apfelmus. Sie sind eine beliebte Zutat in Desserts, aber auch in herzhaften Gerichten wie Braten oder Saucen. \xc4pfel werden oft das ganze Jahr \xfcber in Lebensmittelgesch\xe4ften angeboten und sind ein Grundnahrungsmittel in vielen Haushalten. Sie sind nicht nur lecker, sondern bieten auch eine breite Palette von geschmacklichen und ern\xe4hrungsphysiologischen M\xf6glichkeiten, weshalb sie in der K\xfcche und in der Ern\xe4hrung so beliebt sind."
    },
    {
        id: 1009,
        name: "Rucola",
        unit: "Packen",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/0863980/11742250_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "Rucola, auch als Rauke oder Arugula bekannt, ist ein gr\xfcnes Blattgem\xfcse, das zur Familie der Kreuzbl\xfctler (Brassicaceae) geh\xf6rt. Dieses Blattgem\xfcse hat in den letzten Jahren an Popularit\xe4t gewonnen und ist bekannt f\xfcr seinen w\xfcrzigen und leicht nussigen Geschmack. Rucola hat l\xe4ngliche, gezahnte Bl\xe4tter, die dunkelgr\xfcn bis tiefgr\xfcn gef\xe4rbt sind. Die Bl\xe4tter sind in der Regel klein und zart, was sie ideal f\xfcr Salate und andere frische Gerichte macht. Der charakteristische Geschmack von Rucola ist scharf und peppig, was ihm eine gewisse W\xfcrze verleiht. Dieses Blattgem\xfcse ist eine ausgezeichnete Quelle f\xfcr verschiedene N\xe4hrstoffe, darunter Vitamin K, Vitamin A, Vitamin C, Kalium, Fols\xe4ure und Ballaststoffe. Aufgrund seiner gesundheitsf\xf6rdernden Eigenschaften wird Rucola oft als Teil einer ausgewogenen Ern\xe4hrung gesch\xe4tzt. In der K\xfcche wird Rucola h\xe4ufig in Salaten verwendet, um Frische und einen w\xfcrzigen Akzent hinzuzuf\xfcgen. Er kann auch als Belag f\xfcr Pizzen, Sandwiches oder Wraps verwendet werden. Dar\xfcber hinaus wird Rucola oft als Zutat f\xfcr Pesto und Saucen verwendet, um ihnen eine w\xfcrzige Note zu verleihen. Die Ernte von Rucola erfolgt oft, wenn die Bl\xe4tter noch jung und zart sind, um den besten Geschmack und die beste Textur zu gew\xe4hrleisten. Rucola ist relativ leicht anzubauen und kann in G\xe4rten oder T\xf6pfen auf Balkonen angebaut werden. Insgesamt ist Rucola ein vielseitiges Blattgem\xfcse mit einem einzigartigen Geschmacksprofil, das eine Bereicherung f\xfcr viele Gerichte darstellt. Sein w\xfcrziger Geschmack und seine ern\xe4hrungsphysiologischen Vorteile machen ihn zu einer beliebten Wahl in der modernen K\xfcche."
    },
    {
        id: 1010,
        name: "Lauchzwiebeln",
        unit: "Bund",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/7138093/26921109_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "Lauchzwiebeln, auch Fr\xfchlingszwiebeln genannt, sind eine Gem\xfcsesorte, die zur Familie der Lauchgew\xe4chse (Alliaceae) geh\xf6rt. Sie zeichnen sich durch ihre charakteristische, l\xe4ngliche Form aus, bei der eine zarte wei\xdfe Zwiebelbasis mit einer gr\xfcnen St\xe4ngel- und Blattstruktur verbunden ist. Diese Zwiebeln sind bekannt f\xfcr ihren milden, leicht w\xfcrzigen Geschmack und werden in vielen K\xfcchen weltweit gesch\xe4tzt. Die wei\xdfe Basis der Lauchzwiebel ist der Teil, der traditionell als Zwiebel verwendet wird, w\xe4hrend die gr\xfcnen Bl\xe4tter oft f\xfcr ihre frische, leicht scharfe Note gesch\xe4tzt werden. Die Textur der wei\xdfen Basis ist zart, w\xe4hrend die gr\xfcnen Teile knackig und zart sind. Lauchzwiebeln sind eine gute Quelle f\xfcr Vitamine und Mineralstoffe, insbesondere Vitamin K, Vitamin C und Fols\xe4ure. Sie enthalten auch Ballaststoffe, die zur Verdauung beitragen k\xf6nnen. Aufgrund ihres geringen Kaloriengehalts sind sie eine gesunde Erg\xe4nzung zu einer ausgewogenen Ern\xe4hrung. In der K\xfcche werden Lauchzwiebeln vielseitig eingesetzt. Sie k\xf6nnen roh in Salaten verwendet oder als aromatische Zutat in Suppen, Saucen und vielen anderen herzhaften Gerichten hinzugef\xfcgt werden. Die gr\xfcnen Bl\xe4tter eignen sich besonders gut als Garnitur oder zur Verfeinerung von Gerichten. Lauchzwiebeln sind einfach anzubauen und k\xf6nnen in G\xe4rten oder T\xf6pfen auf Balkonen angebaut werden. Sie sind oft in Lebensmittelgesch\xe4ften erh\xe4ltlich und k\xf6nnen das ganze Jahr \xfcber genossen werden. Insgesamt sind Lauchzwiebeln eine gesch\xe4tzte Zutat in der K\xfcche, die eine subtile W\xfcrze und Frische in viele Gerichte bringt. Ihr mildes Aroma und ihre vielseitige Verwendbarkeit machen sie zu einem beliebten Bestandteil in zahlreichen kulinarischen Traditionen weltweit."
    },
    {
        id: 1011,
        name: "Zwiebeln",
        unit: "Netz",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/7156504/27725597_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp",
        description: "Zwiebeln sind eine weit verbreitete und vielseitige Gem\xfcsesorte, die zur Familie der Lauchgew\xe4chse (Alliaceae) geh\xf6ren. Sie sind f\xfcr ihren charakteristischen Geschmack und ihre Verwendung in einer Vielzahl von kulinarischen Gerichten bekannt. Zwiebeln sind in verschiedenen Sorten und Gr\xf6\xdfen erh\xe4ltlich, darunter wei\xdfe Zwiebeln, gelbe Zwiebeln und rote Zwiebeln. Der Aufbau einer Zwiebel besteht aus mehreren Schichten von Fleisch, die von einer d\xfcnnen, trockenen Haut umgeben sind. Die \xe4u\xdfere Schicht kann von einer d\xfcnnen, papierartigen Textur bis zu einer festeren, schalenartigen Beschaffenheit variieren. Die Farbe des Fleisches kann je nach Sorte variieren, wobei wei\xdfe Zwiebeln einen milden Geschmack haben, gelbe Zwiebeln w\xfcrziger sind und rote Zwiebeln eine leicht s\xfc\xdfliche Note aufweisen. Zwiebeln sind reich an verschiedenen N\xe4hrstoffen wie Ballaststoffen, Vitamin C, Vitamin B6 und verschiedenen Mineralstoffen wie Kalium und Fols\xe4ure. Sie sind auch eine ausgezeichnete Quelle f\xfcr Antioxidantien, die zur Bek\xe4mpfung von freien Radikalen im K\xf6rper beitragen k\xf6nnen. In der K\xfcche werden Zwiebeln h\xe4ufig als Grundzutat in vielen Gerichten verwendet. Sie werden gesch\xe4lt, gehackt oder geschnitten und in Pfannen mit \xd6l oder Butter sautiert, um als Basis f\xfcr Suppen, So\xdfen, Eint\xf6pfe und viele andere herzhafte Gerichte zu dienen. Zwiebeln k\xf6nnen auch roh in Salaten, Sandwiches und Salsas verwendet werden. Zwiebeln verleihen den meisten Gerichten einen aromatischen und w\xfcrzigen Geschmack und sind ein wichtiger Bestandteil vieler kulinarischer Traditionen weltweit. Ihre vielseitige Verwendungsm\xf6glichkeit und ihr einzigartiges Aroma machen sie zu einer unverzichtbaren Zutat in der K\xfcche."
    },
    {
        id: 1012,
        name: "Knoblauch",
        unit: "Netz",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/1993507/21799568_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1013,
        name: "Ingwer",
        unit: "St\xfcck",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/5222060/8945760_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1014,
        name: "Kartoffeln",
        unit: "Netz",
        category: "vegAndFruit",
        image_src: "https://img.rewe-static.de/8378934/31571991_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1015,
        name: "Bratw\xfcrste",
        unit: "Packen",
        category: "meatAndSau",
        image_src: "https://img.rewe-static.de/2380998/31507806_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1016,
        name: "Schinken",
        unit: "Pack",
        category: "meatAndSau",
        image_src: "https://img.rewe-static.de/8577412/27664718_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1038,
        name: "Jagdwurst",
        unit: "St\xfcck",
        category: "meat",
        image_src: "https://img.rewe-static.de/8736446/36434858_digital-image.png?impolicy=s-products&imwidth=200&output-format=image/webp"
    },
    {
        id: 1039,
        name: "Salami",
        unit: "St\xfcck",
        category: "meat",
        image_src: "https://img.rewe-static.de/0274877/26966792_digital-image.png?impolicy=s-products&imwidth=200&output-format=image/webp"
    },
    {
        id: 1017,
        name: "Gratink\xe4se",
        unit: "T\xfcte",
        category: "whey",
        image_src: "https://img.rewe-static.de/1145368/10594530_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1018,
        name: "Butter",
        unit: "St\xfcck",
        category: "whey",
        image_src: "https://img.rewe-static.de/4530594/1092510_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1019,
        name: "Speisest\xe4rke",
        unit: "St\xfcck",
        category: "other",
        image_src: "https://img.rewe-static.de/7079648/7477540_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1020,
        name: "Apfelmus",
        unit: "Glas",
        category: "glassAndCanned",
        image_src: "https://img.rewe-static.de/8964724/40416249_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1022,
        name: "Eier",
        unit: "Pack",
        category: "other",
        image_src: "https://img.rewe-static.de/8745686/35592023_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1023,
        name: "Mais",
        unit: "Dose",
        category: "glassAndCanned",
        image_src: "https://img.rewe-static.de/1945790/23329848_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1024,
        name: "Bohnen",
        unit: "Dose",
        category: "glassAndCanned",
        image_src: "https://img.rewe-static.de/6177620/24356522_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1025,
        name: "Honig",
        unit: "Glas",
        category: "glassAndCanned",
        image_src: "https://img.rewe-static.de/7845005/35072447_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1027,
        name: "Vanilleies",
        unit: "Packen",
        category: "snacks",
        image_src: "https://img.rewe-static.de/2101501/31224875_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1028,
        name: "Schokoeis",
        unit: "Packen",
        category: "snacks",
        image_src: "https://img.rewe-static.de/2101508/22053613_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1029,
        name: "Himbeeren TK",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://img.rewe-static.de/7091046/30307193_digital-image.png?impolicy=s-products&imwidth=464&output-format=image/webp"
    },
    {
        id: 1030,
        name: "Quark",
        unit: "Pack",
        category: "whey",
        image_src: "https://img.rewe-static.de/7915060/32493967_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1031,
        name: "Schmand",
        unit: "Becher",
        category: "other",
        image_src: "https://img.rewe-static.de/8187819/30965665_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1032,
        name: "Eierlik\xf6r",
        unit: "Flasche",
        category: "spirits",
        image_src: "https://img.rewe-static.de/8704114/34920252_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1033,
        name: "Kokosmilch",
        unit: "Dose",
        category: "glassAndCanned",
        image_src: "https://img.rewe-static.de/7738173/38411172_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1034,
        name: "Zitronensaft",
        unit: "St\xfcck",
        category: "other",
        image_src: "https://img.rewe-static.de/0546552/34100990_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1035,
        name: "M\xfcllbeutel 60 L",
        unit: "Rolle",
        category: "nonFood",
        image_src: "https://img.rewe-static.de/0515505/23888545_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1036,
        name: "M\xfcllbeutel 120 L",
        unit: "Rolle",
        category: "nonFood",
        image_src: "https://img.rewe-static.de/2825703/25523317_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    },
    {
        id: 1037,
        name: "Gefrierbeutel",
        unit: "St\xfcck",
        category: "other",
        image_src: "https://img.rewe-static.de/2383246/29944181_digital-image.png?impolicy=s-offers&imwidth=200&output-format=image/webp"
    }
];
const productsBeka = [
    {
        id: 2001,
        name: "Paprikastreifen",
        unit: "T\xfcte",
        category: "vegAndFruit",
        image_src: "https://static.hanos.com/sys-master/productimages/h1b/hae/10321804492830/914Wx914H_null"
    },
    {
        id: 2002,
        name: "Apfelsegmente",
        unit: "T\xfcte",
        category: "vegAndFruit",
        image_src: "https://www.darta.com/sites/default/files/styles/packaging_image/public/packaging-images/81215199.jpg?itok=NFQIxugE"
    },
    {
        id: 2003,
        name: "Pommes kc",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://www.avikofoodservice.com/_next/image?url=https%3A%2F%2Faviko-eu.s3.eu-west-2.amazonaws.com%2Fgroup%2F2022-07%2F322525%2520Aviko%2520Pommes%2520Frites%2520Crinkle%25202500g.png&w=1440&q=100"
    },
    {
        id: 2017,
        name: "Kroketten",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h04/h74/8971362959390/2356961-01.jpg"
    },
    {
        id: 2004,
        name: "Herzoginkartoffeln",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h45/h09/9251190177822/1859986-01.jpg"
    },
    {
        id: 2007,
        name: "R\xf6stis",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/heb/hce/9251192930334/660590-01.jpg"
    },
    {
        id: 2005,
        name: "Spinat TK",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h00/h3c/8971357585438/2200465-01.jpg"
    },
    {
        id: 2006,
        name: "Erbsen TK",
        unit: "T\xfcte",
        category: "frozen",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/hfd/hed/8971553669150/2200198-01.jpg"
    },
    {
        id: 2008,
        name: "Garscheiben",
        unit: "Karton",
        category: "convenience",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h3d/h2a/9300950188062/1390163-01.jpg"
    },
    {
        id: 2009,
        name: "Pute",
        unit: "St\xfcck",
        category: "meat",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h26/hd2/8980644691998/892319-01.jpg"
    },
    {
        id: 2010,
        name: "Schweinelachs",
        unit: "St\xfcck",
        category: "meat",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h65/hde/8980602093598/852880-01.jpg"
    },
    {
        id: 2011,
        name: "Schweineschulter",
        unit: "St\xfcck",
        category: "meat",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/hc4/h92/8970876420126/890251-01.jpg"
    },
    {
        id: 2012,
        name: "Speck gew\xfcrfelt",
        unit: "St\xfcck",
        category: "meat",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h5f/h3d/8980460339230/1274163-01.jpg"
    },
    {
        id: 2013,
        name: "Mett TK",
        unit: "Rolle",
        category: "meat",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h2d/h79/8982004367390/2139618-01.jpg"
    },
    {
        id: 2014,
        name: "Schnitzel TK 140",
        unit: "Karton",
        category: "meat",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h8a/hd7/9158588170270/597708-01.jpg"
    },
    {
        id: 2015,
        name: "Pangasius",
        unit: "kg",
        category: "fish",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/hd4/hef/9255714619422/3473287-01.jpg"
    },
    {
        id: 2016,
        name: "Zander",
        unit: "Karton",
        category: "fish",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/h88/hce/9263501148190/1932756-01.jpg"
    },
    {
        id: 2019,
        name: "Brathering",
        unit: "Eimer",
        category: "fish",
        image_src: "https://www.maevo.de/cdn/shop/products/1001165_1024x1024@2x.jpg?v=1643899599"
    },
    {
        id: 2018,
        name: "Matjes",
        unit: "Eimer",
        category: "fish",
        image_src: "https://d40toz3wdlpr6.cloudfront.net/medias/sys_master/root/hf5/h42/9097732259870/857602-01.jpg"
    }
];
// -------------------------------------
const dataLidl = {
    id: 101,
    name: "Lidl",
    logoImg_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/60px-Lidl-Logo.svg.png",
    products: productsLidl
};
const dataBeka = {
    id: 102,
    name: "Beka",
    logoImg_src: "https://media.cylex.de/companies/7136/073/logo/logo.jpg",
    products: productsBeka
};
const dataDealer = [
    dataLidl,
    dataBeka
];
let unitList = [
    "Kiste/n",
    "T\xfcte/n",
    "Netz/e",
    "St\xfcck",
    "Pack/en",
    "Glas",
    "kg",
    "Liter",
    "Eimer",
    "Flasche/n",
    "Sack",
    "Karton",
    "Bund/e",
    "Knolle/n",
    "Rolle/n"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lg0TE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
"use strict";
class MenuView extends (0, _viewJsDefault.default) {
    _burgerButton = document.querySelector(".burgerContainer");
    _closeButton = document.querySelector(".closeButtonContainer");
    _menuDealerButton = document.querySelector(".menuMyDealer");
    _menuClearButton = document.querySelector(".menuClearList");
    openCloseMenu() {
        const menu = document.querySelector("#menu");
        menu.style.width = menu.style.width === "70vw" ? "" : "70vw";
    }
    toggleMenu() {
        [
            this._burgerButton,
            this._closeButton
        ].forEach((button)=>{
            button.addEventListener("click", this.openCloseMenu);
        });
    }
    toDealer(handler) {
        this._menuDealerButton.addEventListener("click", ()=>{
            handler();
            this.openCloseMenu();
        });
    }
    displayMenuEntry_Clear() {
        this._menuClearButton.classList.remove("hidden");
    }
    hideMenuEntry_Clear() {
        this._menuClearButton.classList.add("hidden");
    }
    addHandlerClearShoppingList(handler) {
        this._menuClearButton.addEventListener("click", ()=>{
            handler();
        });
    }
}
exports.default = new MenuView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class View {
    _parentElementBody = document.querySelector("#mainBody");
    _parentElementHeader = document.querySelector("#overview");
    _handlerAndTargets = {
        controlRenderShoCa: ".shoppingCartImg",
        controlRenderShoLi: ".listEntryContainer",
        controlRenderProduct: ".shoppingListCard",
        controlLoadDb: ".menuMyDealer",
        controlLoadID: ".card"
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
        window.addEventListener("click", (function(e) {
            const el = e.target.closest(target);
            if (!el) return;
            if (el.dataset) handler();
        }).bind(this));
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
        setTimeout(()=>{
            el.style.opacity = "1";
        }, 0);
    }
    _showAndHideOP(el, shown) {
        if (shown) el.classList.add("hidden");
        if (!shown) el.classList.remove("hidden");
        el.style.opacity = "0";
        el.style.transition = "opacity 0.2s";
        setTimeout(()=>{
            el.style.opacity = "1";
        }, 0);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AeHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _modelJs = require("../model.js");
"use strict";
class ShoppinglistView extends (0, _viewJsDefault.default) {
    _products;
    _inputFieldDealer;
    addHandlerScroll(handler) {
        window.addEventListener("scrollend", ()=>{
            handler();
        });
    }
    loadProductList(_product) {
        return this._products;
    }
    generateID() {
        const parentElement = document.querySelector(".cards");
        parentElement.addEventListener("click", function(e) {
            const id = e.target.closest(".card").dataset.id;
            return id;
        });
    }
    addToShoppingList(handler) {
        this._addDealer.addEventListener("click", ()=>{
            handler(this._inputFieldDealer.value);
            this._inputFieldDealer.value = "";
        });
    }
    _generateMarkup() {
        const dealer = this._data.dealer.find((el)=>el.id === +this._data.dealer.id);
        this._products = dealer.products;
        const generateCard = dealer.products.map((data)=>{
            return `
      <li class="card shoppingListCard" data-id="${data.id}" data-card="product">
        <div class="listEntry cardEntry"" >
          <div>
            <p class="cardTitle">${data.name}</p>
            <p class="cardProductDescription">${data.unit}</p>
          </div>
          <div class="cardImg">
            <img src="${data.image_src}" alt="" />
          </div>
          <div class="${data.bookmarked ? "heartFilled" : "heartBordered"} heart"></div>
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
          <input type="text" id="textInputDealer" placeholder="Produkt hinzufügen..." />
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
        // const generateCard = dealer.products.map((data) => {
        //   return `
        // <li class="card shoppingListCard" data-id="${
        //   data.id
        // }" data-card="product">
        //   <div class="listEntry cardEntry"" >
        //     <div>
        //       <p class="cardTitle">${data.name}</p>
        //     </div>
        //     <img src="${data.image_src}" alt="Strawberry" />
        //     <div class="${
        //       data.bookmarked ? "heartFilled" : "heartBordered"
        //     } heart"></div>
        //     <div class="cardsShoppingCard">
        //       <div class="cartImg"></div>
        //     </div>
        //   </div>
        // </li>
        //   `;
        // });
        // const markup = `
        // <div class="shoppingArea">
        // <div class="inputContainer inputSearch">
        //   <div class="inputAddDealer">
        //     <input type="text" id="textInputDealer" placeholder="Produkt hinzufügen..." />
        //   </div>
        //   <div class="inputField">
        //     <div class="button button--addDealer">
        //       <div class="plus"></div>
        //     </div>
        //   </div>
        // </div>
        // <div class="smallMenu">
        //   <p>Alle</p>
        //   <p>Favoriten</p>
        // </div>
        // <ul class="cards cardProduct">
        // ${generateCard.join("")}
        // </ul>
        // </div>`;
        this._insertHTML(markup);
        this._addDealer = document.querySelector(".button--addDealer");
        this._inputFieldDealer = document.querySelector("#textInputDealer");
    }
}
exports.default = new ShoppinglistView();

},{"./View.js":"5cUXS","../model.js":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ie8VL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _modelJs = require("../model.js");
"use strict";
class DashboardView extends (0, _viewJsDefault.default) {
    _headerDealerTitle = document.querySelector(".headerDealerTitle");
    // dealerName;
    addHandlerLoadDb(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        const generateDealer = this._data.dealer.map((dealer)=>{
            let log;
            if (Object.keys(this._data.log).length !== 0) [log] = this._data.log[dealer.name].map((log)=>log).splice(-1);
            return `
      <li class="card listEntryContainer" data-name="${dealer.name}" data-id="${dealer.id}" data-card="dealer">
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
exports.default = new DashboardView(); // ${this._data.timestamp ? this._data.timestamp : "Neue Liste."}

},{"./View.js":"5cUXS","../model.js":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Qur4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
"use strict";
class ProductView extends (0, _viewJsDefault.default) {
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
        this._addButton.addEventListener("click", ()=>{
            if (this._from) handler(true);
            else handler(false);
        });
    }
    addHandlerBack(handler) {
        this._backButton.addEventListener("click", ()=>{
            if (this._from) handler(true);
            else handler(false);
        });
    }
    addHandlerChangeQuantity(handler, from) {
        this._quanContainer.addEventListener("click", function(e) {
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
        document.querySelector(".unitSelectListContainer").classList.toggle("hidden");
        document.querySelector(".buttonArrowDown ").classList.toggle("btnTransform");
    }
    selectUnit() {
        const unitListItems = this._unitSelectList.querySelectorAll("li");
        unitListItems.forEach((item)=>{
            item.addEventListener("click", (e)=>{
                this._unitValue.innerHTML = this.unitValueReturn = e.target.innerHTML;
            });
        });
    }
    unfoldText() {
        this._unfoldTextButton.addEventListener("click", ()=>{
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
        const product = this._data.product.find((pro)=>pro.id === +this._data.product.id);
        const units = this._data.units.map((unit)=>{
            return `<li>${unit}</li>`;
        });
        this._fullText = `${product.description ? product.description : "Keine Beschreibung vorhanden."}`;
        const splitText = function(text, lines) {
            const textArray = text.split(" ");
            return `${textArray.slice(0, lines).join(" ")}...`;
        };
        const initialText = splitText(this._fullText, 30);
        this._partialText = initialText;
        const markup = `
    <div class="productView">
    <div class="productImgSection">
      <div class="arrBack"></div>
      <div class="heart ${product.bookmarked ? "heartFilledProduct" : "heartBorderedProduct"} heartBtn"></div>
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
exports.default = new ProductView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2ZMo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
"use strict";
class ShoppingCart extends (0, _viewJsDefault.default) {
    header = document.querySelector("#header");
    _parentElementTrash;
    product;
    addHandlerDeleteProduct(del, change) {
        this._parentElementTrash.addEventListener("click", (e)=>{
            let id = e.target.parentElement.dataset.id;
            this.product = e.target.closest(".listEntryCart").dataset.id;
            if (e.target.className === "trashImg") del();
            if (e.target.className === "listProductName" || e.target.className === "listProductQuantity" || e.target.className === "listProductUnit") // this._from = true;
            change(id);
            else return;
        });
    }
    _generateMarkup() {
        const findEl = (data)=>data.find((el)=>el.id === +data.id);
        const dealer = findEl(this._data.dealer);
        let dealerCart = this._data.shoppingCart.find((d)=>{
            if (d[dealer.name]) return d[dealer.name];
        });
        const cart = dealerCart[dealer.name].map((el)=>{
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
exports.default = new ShoppingCart();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wq1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
"use strict";
class HeaderView extends (0, _viewJsDefault.default) {
    _parentElementHeader = document.querySelector("#overview");
    _shoppingCartLogo = document.querySelector(".shoppingCartImg");
    _backButtonHeader = document.querySelector(".arrBackHeader");
    _title = document.querySelector(".title");
    addHandlerBack(handler) {
        this._backButtonHeader.addEventListener("click", (function() {
            handler();
            this._showAndHideOP(this._backButtonHeader, true);
        }).bind(this));
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
        this._parentElementBody.firstElementChild.className === "productView" ? header.className = "hidden" : header.classList.remove("hidden");
    }
    changeOverviewTitle(dealerArr, open) {
        const dealer = dealerArr.find((id)=>+dealerArr.id === id.id);
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
exports.default = new HeaderView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequire15b7")

//# sourceMappingURL=index.e37f48ea.js.map
