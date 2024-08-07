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
})({"cohpT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c26ef22bf71e6048";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8VGZO":[function(require,module,exports) {
//import Ui from "./displayProducts.mjs";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _getproductsMjs = require("./getproducts.mjs");
var _getproductsMjsDefault = parcelHelpers.interopDefault(_getproductsMjs);
var _localStorageMjs = require("./localStorage.mjs");
var _localStorageMjsDefault = parcelHelpers.interopDefault(_localStorageMjs);
var _headerJs = require("./header.js");
var _footerJs = require("./footer.js");
var _pickuppointJs = require("./pickuppoint.js");
var _aboutusJs = require("./aboutus.js");
//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartButton = document.querySelector(".close-cart");
const clearCartButton = document.querySelector(".clear-cart");
const cartNavBtn = document.querySelector(".nav-icon-cart");
//cart nodes from the dom
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const productsInTheDOM = document.querySelector(".products-area");
const cartIterms = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
//const cartContent = document.querySelector(".cart-content");
//
let cart = [];
//
let buttonsInTheDOM = [];
//generate Ui
class UI {
    displayProducts(stock) {
        let result = "";
        stock.forEach((product)=>{
            result += `<article class="product">
            <div class="img-container">
              <img src=${product.image} alt="" class="product-img" />
              <button class="bag-btn" data-id=${product.id}>
                <i class="fas fa-shopping-cart"></i>
                add to bag
              </button>
            </div>
            <h3>${product.title}</h3>
            <P>popularity ${product.rating.rate}</p>
            <h4>R ${product.price}</h4>
          </article>`;
        });
        if (productsInTheDOM) productsInTheDOM.innerHTML = result;
    }
    getBtnsBag() {
        const buttons = [
            ...document.querySelectorAll(".bag-btn")
        ];
        buttonsInTheDOM = buttons;
        //console.log(buttons);
        buttons.forEach((button)=>{
            let id = button.dataset.id;
            let inTheCart = cart.find((item)=>item.id === id);
            if (inTheCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener("click", (event)=>{
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                //get product from the stock or products from local storage and store it in a object
                let cartItem = {
                    ...(0, _localStorageMjsDefault.default).getProduct(id),
                    units: 1
                };
                //add item or product clicked or chosen to the cartarray
                cart = [
                    ...cart,
                    cartItem
                ];
                //save stored cart to the local storage
                (0, _localStorageMjsDefault.default).saveCurrentCart(cart);
                //set cartvalues =>cart array
                this.updateSetCartValues(cart);
                //diplay cart item
                this.addCartItem(cartItem);
                //show cart
                this.showCaseCart();
            });
        });
    }
    updateSetCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map((item)=>{
            tempTotal += item.price * item.units;
            itemsTotal += item.units;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartIterms.innerText = itemsTotal;
    }
    /*The problem is that when i click add item it is added to cart but then not injected into the dom*/ //this function creates a templateand inserts items that has been selected
    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src=${item.image} alt=${item.title}>
            <div>
                <h4>${item.title}</h4>
                <h5>R ${item.price}</h5>
                <span class="remove-item" data-id=${item.id}>
        remove
                </span>
            </div>
            <div>
                <i class="fas fa-chevron-up" data-id=${item.id}></i>
                <p class="item-amount">${item.units}</p>
                <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </div>`;
        //console.log(cartDom)
        cartContent.appendChild(div);
    //cartDom.appendChild(cartContent);
    //cartOverlay.appendChild(cartDom);
    //console.log(cartDom)
    }
    showCaseCart() {
        cartOverlay.classList.add("transparentCover");
        cartDom.classList.add("showCaseCart");
    }
    setUpApplication() {
        cart = (0, _localStorageMjsDefault.default).getCartFromLocalStorage();
        this.updateSetCartValues(cart);
        this.fillupCart(cart);
        cartBtn.addEventListener("click", this.showCaseCart);
        closeCartButton.addEventListener("click", this.hideCart);
    }
    fillupCart(cart) {
        cart.forEach((item)=>{
            this.addCartItem(item);
        });
    }
    hideCart() {
        cartOverlay.classList.remove("transparentCover");
        cartDom.classList.remove("showCaseCart");
    }
    cartFunctionality() {
        //this is for cart clear button
        clearCartButton.addEventListener("click", ()=>{
            this.clearCart();
        });
        //inside cart logic
        cartContent.addEventListener("click", (event)=>{
            if (event.target.classList.contains("remove-item")) {
                //store the item in a variable
                let removeThisItem = event.target;
                let itemId = removeThisItem.dataset.id;
                // this line below is for removing from the dom
                cartContent.removeChild(removeThisItem.parentElement.parentElement);
                //this one below is for removing from cart array
                this.removeThisItem(parseInt(itemId));
            } else if (event.target.classList.contains("fa-chevron-up")) {
                let addunits = event.target;
                let itemId = addunits.dataset.id;
                let temperalItem = cart.find((item)=>item.id === parseInt(itemId));
                temperalItem.units = temperalItem.units + 1;
                (0, _localStorageMjsDefault.default).saveCurrentCart(cart);
                this.updateSetCartValues(cart);
                addunits.nextElementSibling.innerText = temperalItem.units;
            } else if (event.target.classList.contains("fa-chevron-down")) {
                let subtractunits = event.target;
                let itemId = subtractunits.dataset.id;
                let temperalItem = cart.find((item)=>item.id === parseInt(itemId));
                temperalItem.units = temperalItem.units - 1;
                if (temperalItem.units > 0) {
                    (0, _localStorageMjsDefault.default).saveCurrentCart(cart);
                    this.updateSetCartValues(cart);
                    subtractunits.previousElementSibling.innerText = temperalItem.units;
                } else {
                    cartContent.removeChild(subtractunits.parentElement.parentElement);
                    this.removeThisItem(parseInt(itemId));
                }
            }
        });
    }
    clearCart() {
        // Remove all items from the cart array
        cart = [];
        this.updateSetCartValues(cart);
        (0, _localStorageMjsDefault.default).saveCurrentCart(cart);
        // Remove all items from the cart DOM
        while(cartContent.children.length > 0)cartContent.removeChild(cartContent.children[0]);
        // Enable all add to cart buttons
        buttonsInTheDOM.forEach((button)=>{
            button.disabled = false;
            button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
        });
        this.hideCart();
    }
    removeThisItem(id) {
        console.log(id);
        cart = cart.filter((cartItem)=>cartItem.id !== id);
        console.log(cart);
        //console.log(cart);
        this.updateSetCartValues(cart);
        //save cart in local storage
        (0, _localStorageMjsDefault.default).saveCurrentCart(cart);
        let button = this.getSingleBtn(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
    }
    getSingleBtn(id) {
        return buttonsInTheDOM.find((button)=>button.dataset.id === id);
    }
} // end of UI  class
//storage
document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new (0, _getproductsMjsDefault.default)();
    // set up application
    ui.setUpApplication();
    //get all products
    products.getProducts().then((products)=>{
        ui?.displayProducts(products);
        (0, _localStorageMjsDefault.default).saveProducts(products);
    }).then(()=>{
        ui.getBtnsBag();
        ui.cartFunctionality();
    });
});
//console.log("Hello ");
/* Banner Button*/ const BannerBtn = document.querySelector(".banner-btn");
BannerBtn.addEventListener("click", ()=>{
    window.location.href = "/";
});
/* pick up pointsa */ const route = window.location.pathname;
if (route == "/pickup-point.html") {
    async function renderPickUpPoints() {
        try {
            const response = await fetch("data/pickuppoints.json");
            const data = await response.json();
            (0, _pickuppointJs.pickUpPoints)(data);
        } catch (error) {
            error;
        }
    }
    renderPickUpPoints();
}
/* About us */ const routeabout = window.location.pathname;
if (route == "/aboutus.html") {
    async function renderAboutUs() {
        try {
            const response = await fetch("data/aboutus.json");
            const data = await response.json();
            (0, _aboutusJs.aboutUs)(data);
        } catch (error) {
            error;
        }
    }
    renderAboutUs();
}

},{"./getproducts.mjs":"gbgtL","./localStorage.mjs":"yQfFW","./header.js":"hRpMz","./footer.js":"1aqGu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pickuppoint.js":"5JXOi","./aboutus.js":"cCrEO"}],"gbgtL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let url = "https://fakestoreapi.com/products";
class Products {
    async getProducts() {
        try {
            let result = await fetch(url);
            if (result.ok) {
                let data = await result.json();
                //console.log(data);
                return data;
            }
        } catch (error) {
            return console.log(error);
        }
    }
}
exports.default = Products;

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

},{}],"yQfFW":[function(require,module,exports) {
//local storage
// establish a function that takes an array and stringfy it
/*
when you access the localStorage there is many functions available to you this time use the setItem
 then pass the first argument is a key that will be matched with an array of the products passed as an argument 

*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Storage {
    //this saves the products catalogue to the local storage
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    //this one gets the product we have selected based on product id from the localstorage
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find((product)=>product.id == id);
    }
    //this saves the products selected to the local storage under cart
    static saveCurrentCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    //get cart from local storage
    static getCartFromLocalStorage() {
        let cartData = JSON.parse(localStorage.getItem("cart"));
        if (cartData !== null) return cartData;
        else {
            let cart = [];
            return cart;
        }
    }
}
exports.default = Storage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRpMz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    @media screen and (max-width: 768px) {
:root {
  /* change the values below to your colors from your palette */
  --primary-color: #ffffff   ;
  --secondary-color:#e7e2dd ;
  --accent1-color: #f09d51;
  --accent2-color: #131313;

  /* change the values below to your chosen font(s) */
 
  --font: "Nunito", sans-serif;
}
     *{
  font-family: var(--font);
}
      
      .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: black;
      }
      
      .burger-menu {
        display: block;
        cursor: pointer;
      }
      
      .burger-menu.active .bar:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      
      .burger-menu.active .bar:nth-child(2) {
        opacity: 0;
      }
      
      .burger-menu.active .bar:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
      
      .nav_menu {
        z-index: 100;
        display: flex;
        flex-direction: column;
        position: fixed;
        left: -110%;
        top: 60px;
        width: 90%;
        text-align: center;
        transition: 0.3s;
        background-color: #e7e2dd; /* Added background color for visibility */
        margin: 0 ;
        opacity: 100%;
      }
      
      .nav_item {
        margin: 16px 0;
      }
      
      .nav_menu.active {
        left: 0;
      }
      
      .topnav {
        display: flex;
        justify-content: space-between; /* Adjusted to space items between */
        align-items: center;
      }
      
      nav a,
      nav ul,
      nav ul li {
        text-decoration: none;
      }
      
      footer,
      header {
        background-color: var(--background);
        color: #0c0c0c;
        padding: 1rem;
        z-index: 100;
      }
      
      header > h2 {
        font-size: 1.5rem;
      }
      
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      nav a {
        color: #0c0c0c;
        padding: 0.5rem 1rem;
      }
      
      nav ul {
        list-style: none;
      }
      
      nav ul li {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        font-size: 17px;
     
      }
      
      nav ul li a:hover {
        background-color: var( --accent1-color);
        color: #000;
        border-radius: 12px;
      }
      
      nav ul li a.active {
        background-color:var( --accent1-color);
        color: #fff;
      }
    }

@media only screen and (min-width: 768px) {
 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background);
    color: #0c0c0c;
    padding: 1rem;
  }
  nav a,
  nav ul,
  nav ul li {
    text-decoration: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav a {
    color: #0c0c0c;
    padding: 0.5rem 1rem;
  }
  nav ul {
    list-style: none;
  }
  nav ul li {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    font-size: 17px;
  }
  nav ul li a:hover {
    background-color: #f09d51;
    color: #000;
    border-radius: 12px;
  }
  nav ul li a.active {
    background-color: #04aa6d;
    color: #fff;
  }


}










        </style>
       
      <header>
      <div class="topnav">
        
        <div id="burger-menu" class="burger-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <nav class="topnav">
        <ul class="nav_menu">
          <li><a href="index.html">Shop</a></li>
          <li class="nav_item">
            <a
              class="nav_link"
              href="pickup-point.html"
              target="_blank"
              >Pickup Points</a
            >
          </li>
          <li class="nav_item">
            <a
              href="aboutus.html"
              target="_blank"
              class="nav_link"
              >About Us</a
            >
          </li>
          
        </ul>
      </nav>
    </header>

      `;
class Header extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: "closed"
        });
        shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
        /* Hamburger Menu */ const hamburger = shadowRoot.querySelector("#burger-menu");
        const navMenu = shadowRoot.querySelector(".nav_menu");
        hamburger.addEventListener("click", ()=>{
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
        shadowRoot.querySelectorAll(".nav_link").forEach((n)=>{
            n.addEventListener("click", ()=>{
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }
}
customElements.define("header-component", Header);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aqGu":[function(require,module,exports) {
// footer.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer);
const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap');

        :root {
            --primary-color: #ffffff;
            --secondary-color: #e7e2dd;
            --accent1-color: #f09d51;
            --accent2-color: #131313;
            --font: "Nunito", sans-serif;
        }

        * {
            font-family: var(--font);
        }

        footer {
            background-color: #e7e2dd;
            color: #0c0c0c;
            padding: 1rem;
            z-index: 100;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    </style>

    <footer>
        <p>
            ©<span id="currentyear"></span> 🤖 McDonald Musimwa 🤖 Cape Town 🤖 South Africa
        </p>
        <p id="lastmodified"></p>
    </footer>
`;
class Footer extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: "closed"
        });
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
        /* Update footer content */ const currentYear = new Date().getFullYear();
        shadowRoot.getElementById("currentyear").innerHTML = currentYear;
        const lastModified = document.lastModified;
        shadowRoot.getElementById("lastmodified").innerHTML = "Last Modification: " + lastModified; // No need for Date() here
    }
}
customElements.define("footer-component", Footer);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JXOi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pickUpPoints", ()=>pickUpPoints);
function pickUpPoints(array) {
    const pickuparea = document.getElementById("Pickup-area");
    array.forEach((point)=>{
        // Create card element
        const card = document.createElement("div");
        card.className = "card";
        // Create and append image
        const img = document.createElement("img");
        img.src = point.picture;
        img.alt = point.locationName;
        img.className = "card-img";
        card.appendChild(img);
        // Create and append card content
        const cardContent = document.createElement("div");
        cardContent.className = "card-content";
        const locationName = document.createElement("h3");
        locationName.textContent = point.locationName;
        cardContent.appendChild(locationName);
        const br = document.createElement("hr");
        cardContent.appendChild(br);
        const city = document.createElement("p");
        city.innerHTML = `<strong>City:</strong> ${point.city}`;
        cardContent.appendChild(city);
        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${point.address}`;
        cardContent.appendChild(address);
        const directions = document.createElement("p");
        directions.innerHTML = `<strong>Directions:</strong> ${point.directions}`;
        cardContent.appendChild(directions);
        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone:</strong> ${point.phone}`;
        cardContent.appendChild(phone);
        card.appendChild(cardContent);
        pickuparea.appendChild(card);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCrEO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutUs", ()=>aboutUs);
function aboutUs(data) {
    const about = data[0].aboutus;
    const aboutus = document.querySelector(".aboutus-area");
    const span = document.createElement("span");
    span.className = "card";
    span.textContent = about;
    aboutus.appendChild(span);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cohpT","8VGZO"], "8VGZO", "parcelRequirea26a")

//# sourceMappingURL=index.f71e6048.js.map
