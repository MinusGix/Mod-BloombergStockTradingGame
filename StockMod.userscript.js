// ==UserScript==
// @name         Bloomberg Stock Trading Game Modifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bloomberg.com/features/2015-stock-chart-trading-game/
// @grant        none
// ==/UserScript==

console.log ("Modification Starting....");

// Micromodal, for displaying modals
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):e.MicroModal=o()}(this,function(){"use strict"
var e=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),t=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o]
return t}return Array.from(e)}
return function(){var i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],n=function(){function n(o){var i=o.targetModal,a=o.triggers,r=void 0===a?[]:a,s=o.onShow,l=void 0===s?function(){}:s,c=o.onClose,d=void 0===c?function(){}:c,u=o.openTrigger,f=void 0===u?"data-micromodal-trigger":u,h=o.closeTrigger,v=void 0===h?"data-micromodal-close":h,g=o.disableScroll,m=void 0!==g&&g,b=o.disableFocus,y=void 0!==b&&b,w=o.awaitCloseAnimation,k=void 0!==w&&w,p=o.debugMode,E=void 0!==p&&p
e(this,n),this.modal=document.getElementById(i),this.config={debugMode:E,disableScroll:m,openTrigger:f,closeTrigger:v,onShow:l,onClose:d,awaitCloseAnimation:k,disableFocus:y},r.length>0&&this.registerTriggers.apply(this,t(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return o(n,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),i=0;i<o;i++)t[i]=arguments[i]
t.forEach(function(o){o.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal
this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function o(){e.classList.remove("is-open"),e.removeEventListener("animationend",o,!1)},!1):e.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body")
switch(e){case"enable":Object.assign(o.style,{overflow:"initial",height:"initial"})
break
case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(i)
return Object.keys(e).map(function(o){return e[o]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes()
e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes()
if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement)
e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus()}}]),n}(),a=null,r=function(e,o){var t=[]
return e.forEach(function(e){var i=e.attributes[o].value
void 0===t[i]&&(t[i]=[]),t[i].push(e)}),t},s=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},l=function(e){if(e.length<=0)return console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1},c=function(e,o){if(l(e),!o)return!0
for(var t in o)s(t)
return!0}
return{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=[].concat(t(document.querySelectorAll("["+o.openTrigger+"]"))),a=r(i,o.openTrigger)
if(!0!==o.debugMode||!1!==c(i,a))for(var s in a){var l=a[s]
o.targetModal=s,o.triggers=[].concat(t(l)),new n(o)}},show:function(e,o){var t=o||{}
t.targetModal=e,!0===t.debugMode&&!1===s(e)||(a=new n(t),a.showModal())},close:function(){a.closeModal()}}}()})

/*
<!-- [1] -->
<div id="modal-1" aria-hidden="true">

  <!-- [2] -->
  <div tabindex="-1" data-micromodal-close>

    <!-- [3] -->
    <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >


      <header>
        <h2 id="modal-1-title">
          Modal Title
        </h2>

        <!-- [4] -->
        <button aria-label="Close modal" data-micromodal-close></button>
      </header>

      <div id="modal-1-content">
        Modal Content
      </div>

    </div>
  </div>
</div>
*/

let myStyles = document.createElement('style');
myStyles.innerText = `
.hidden {
    display: none;
}
`;

document.body.appendChild(myStyles);

// Modal elements
let modalDiv = document.createElement('div');
modalDiv.id = "modal-1";
modalDiv.setAttribute('aria-hidden', 'true');
modalDiv.classList.add('micromodal-slide');

let modalSubDiv = document.createElement('div');
modalSubDiv.setAttribute('tabindex', '-1');
modalSubDiv.setAttribute('data-micromodal-close', ''); // hopefully will set it to nothing, but still add that attribute.
modalSubDiv.classList.add('modal__overlay');
modalDiv.appendChild(modalSubDiv);

let modalDialogDiv = document.createElement('div');
modalDialogDiv.setAttribute('role', 'dialog');
modalDialogDiv.setAttribute('aria-modal', 'true');
modalDialogDiv.setAttribute('aria-labelledby', 'modal-1-title');
modalDialogDiv.classList.add('modal__container');
modalSubDiv.appendChild(modalDialogDiv);

let modalHeader = document.createElement('header');
modalHeader.classList.add('modal__header');
modalDialogDiv.appendChild(modalHeader);

let modalTitle = document.createElement('h2');
modalTitle.innerText = "Modification Settings";
modalTitle.classList.add('modal__title');
modalHeader.appendChild(modalTitle);

let closeModalButton = document.createElement('button');
closeModalButton.setAttribute('aria-label', "Close modal");
closeModalButton.setAttribute('data-micromodal-close', ''); // hopefully works
closeModalButton.classList.add('modal__close');
modalHeader.appendChild(closeModalButton);

let modalContent = document.createElement('main');
modalContent.classList.add('modal__content');
modalContent.id = 'modal-1-content';
modalDialogDiv.appendChild(modalContent);

let modalContentText = document.createElement('p');
modalContentText.innerText = 'Various settings to modify the game. Default is unmodified from original.';
modalContent.appendChild(modalContentText);

document.body.appendChild(modalDiv);

let modalContentTickersContainer = document.createElement('div');
modalContent.appendChild(modalContentTickersContainer);
let mCTCDropdownButton = document.createElement('button');
let mCTCHiddenText = 'v Equities';
let mCTCDisplayedText = '^ Equities';
mCTCDropdownButton.innerText = mCTCHiddenText;
mCTCDropdownButton.addEventListener('click', () => {
    displayTickers();
    if (mCTCDropdownButton.innerText === mCTCHiddenText) { // show the dropdown
        modalContentTickers.classList.remove('hidden');
        mCTCDropdownButton.innerText = mCTCDisplayedText;
    } else if (mCTCDropdownButton.innerText === mCTCDisplayedText) {
        modalContentTickers.classList.add('hidden');
        mCTCDropdownButton.innerText = mCTCHiddenText;
    } else {
        alert('Error in dropdown. Refreshing might fix the problem, or you might be able to just ignore it.');
    }
});
modalContentTickersContainer.appendChild(mCTCDropdownButton);

let mCTCDisableButton = document.createElement('button');
mCTCDisableButton.innerText = "Disable All";
mCTCDisableButton.addEventListener('click', () => {
   for (let i = 0; i < defaultTickers.length; i++) {
        settings.defaultTickers[i] = false;
    }

    for (let i = 0; i < unusedTickers.length; i++) {
        settings.unusedTickers[i] = false;
    }

    for (let i = 0; i < customTickers.length; i++) {
        customTickers.enabled = false;
    }

    displayTickers();
});
modalContentTickersContainer.appendChild(mCTCDisableButton);

// To hold the enable/disable buttons for each ticker
let modalContentTickers = document.createElement('div');
modalContentTickers.classList.add('hidden');
modalContentTickersContainer.appendChild(modalContentTickers);

// Modal settings

// So I know which ones are legit original, so it will send the requests if its accessing it.
let defaultTickers = [
{
    "ticker": "aapl",
    "name": "AAPL US Equity"
  },
  {
    "ticker": "dell",
    "name": "DELL US Equity",
  },
  {
    "ticker": "nflx",
    "name": "NFLX US Equity"
  },
  {
    "ticker": "tsla",
    "name": "TSLA US Equity"
  },
  {
    "ticker": "brkb",
    "name": "BRK/B US Equity"
  },
  {
    "ticker": "mcz",
    "name": "MCZ US Equity"
  },
  {
    "ticker": "pg",
    "name": "PG US Equity"
  },
  {
    "ticker": "ene",
    "name": "Enron US Equity"
  },
  {
    "ticker": "znga",
    "name": "ZNGA US Equity"
  },
  {
    "ticker": "ge",
    "name": "GE US Equity"
  },
  {
    "ticker": "coke",
    "name": "COKE US Equity"
  },
  {
    "ticker": "googl",
    "name": "GOOGL US Equity"
  },
  {
    "ticker": "cat",
    "name": "CAT US Equity"
  },

  // second batch

  {
    "ticker": "glen",
    "name": "GLEN LN Equity"
  },
  {
    "ticker": "mcd",
    "name": "MCD US Equity"
  },
  {
    "ticker": "dd",
    "name": "DuPont US Equity"
  },
  {
    "ticker": "xom",
    "name": "XOM US Equity"
  },
  {
    "ticker": "1788",
    "name": "1788 HK (Guotai Junan)",
    "description": "On Nov. 23, Guotai Junan announced its CEO was missing and could not be reached. http://www.bloomberg.com/news/articles/2015-11-23/guotai-junan-international-says-chairman-yim-can-t-be-contacted"
  },
  {
    "ticker": "cag",
    "name": "CAG US Equity"
  },
  {
    "ticker": "f",
    "name": "F US Equity"
  },
  {
    "ticker": "corn",
    "name": "CORN US Equity"
  },
  {
    "ticker": "gpro",
    "name": "GPRO US Equity"
  },
  {
    "ticker": "yhoo",
    "name": "YHOO US Equity"
  },
  {
    "ticker": "lulu",
    "name": "LULU (Lululemon)"
  },
  {
    "ticker": "hal",
    "name": "HAL (Halliburton)"
  },
  {
    "ticker": "swhc",
    "name": "SWHC (Smith & Wesson)"
  },
  {
    "ticker": "kbio",
    "name": "KBIO (KaloBios)"
  },
  {
    "ticker": "cmg",
    "name": "CMG (Chipotle)"
  },
  {
    "ticker": "bks",
    "name": "BKS (Barnes & Noble)"
  },
  {
    "ticker": "gs",
    "name": "GS (Goldman Sachs)"
  },
  {
    "ticker": "dis",
    "name": "DIS (Disney)"
  },

  {
    "ticker": "fed",
    "name": "SPX (Fed liftoff)"
  },

  {
    "ticker": "hsi",
    "name": "HSI (Hang Seng Index)"
  },
  {
    "ticker": "shcomp",
    "name": "SHCOMP (Shanghai Composite)"
  }
];
let unusedTickers = [
       // Originally unused. Enabled by this.
    {
    "ticker": "ibm", // shitty
    "name": "IBM US Equity"
  },
  {
    "ticker": "jpm",
    "name": "JPM US Equity"
  },
  {
    "ticker": "rtn",
    "name": "RTN US Equity",
    "description": "The previous day, SpaceX's rocket blew up. Not that it really mattered to Raytheon."
  },
  {
    "ticker": "grpn",  // way too flat intraday
    "name": "GRPN US Equity"
  },
  {
    "ticker": "7974",
    "name": "7974 JT Equity (Nintendo)",
    "description": "https://twitter.com/DavidInglesTV/status/659549109410332672"
  }
];

let customTickers = [
    /* {
        "name": "Example Ticker",
        "data": [],
        "enabled": true
    } */
];

let defaults = {
    duration: gameConfig.duration / 1000 // default of 30000 / 1000 = 30
};

// Values that aren't stored elsewhere
let settings = {
    defaultTickers: defaultTickers.map(() => true), // enable all of them by default
    unusedTickers: [
        false, // ibm
        false, // jpm
        false, // rtn
        false, // grpn
        false // 7974
    ],
};

let durationLabel = document.createElement('label');
durationLabel.innerText = 'Duration of each round: ';
durationLabel.setAttribute('for', 'duration-number-input');
modalContent.appendChild(durationLabel);

let durationNumberInput = document.createElement('input');
durationNumberInput.setAttribute('type', 'number');
durationNumberInput.id = "duration-number-input";
durationNumberInput.addEventListener('change', () => gameConfig.duration = Number(durationNumberInput.value) * 1000);
durationNumberInput.value = gameConfig.duration / 1000;
modalContent.appendChild(durationNumberInput);

let reflushTickersButton = document.createElement('button');
reflushTickersButton.addEventListener('click', () => reflushTickers());
reflushTickersButton.innerText = "Reflush Tickers (Refill)";
modalContent.appendChild(reflushTickersButton);

function reflushTickers () {
    tickers = getValidTickers();

    _.shuffle(tickers);
}

function getValidTickers () {
    let tickerList = [];

    for (let i = 0; i < settings.defaultTickers.length; i++) {
        if (settings.defaultTickers[i]) {
            if (defaultTickers[i]) {
                tickerList.push(defaultTickers[i]);
            }
        }
    }

    for (let i = 0; i < settings.unusedTickers.length; i++) {
        if (settings.unusedTickers[i]) {
            if (unusedTickers[i]) {
                tickerList.push(unusedTickers[i]);
            }
        }
    }

    for (let i = 0; i < customTickers.length; i++) {
        if (customTickers[i].enabled) {
            tickerList.push(customTickers[i]);
        }
    }

    return tickerList;
}

function displayTickers () {
    // remove all of it's children
    while (modalContentTickers.firstChild) {
        modalContentTickers.removeChild(modalContentTickers.firstChild);
    }

    for (let i = 0; i < defaultTickers.length; i++) {
        modalContentTickers.appendChild(createDefaultTicker(i));
    }

    for (let i = 0; i < unusedTickers.length; i++) {
        modalContentTickers.appendChild(createUnusedTicker(i));
    }

    for (let i = 0; i < customTickers.length; i++) {
        modalContentTickers.appendChild(createCustomTicker(customTickers[i]));
    }
}

function createDefaultTicker (index) {
    return createTicker(defaultTickers[index], settings.defaultTickers, index);
}

function createUnusedTicker (index) {
    return createTicker(unusedTickers[index], settings.unusedTickers, index);
}

function createCustomTicker (ticker) {
     let container = document.createElement('div');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    container.appendChild(checkbox);
    checkbox.checked = ticker.enabled;

    let label = document.createElement('label');
    label.innerText = '[CUSTOM] ' + ticker.name;
    container.appendChild(label);

    checkbox.addEventListener('change', () => {
        ticker.enabled = checkbox.checked;
        reflushTickers();
    });

    return container;
}

function createTicker(ticker, holder, index) {
    let container = document.createElement('div');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    container.appendChild(checkbox);
    checkbox.checked = holder[index];

    let label = document.createElement('label');
    label.innerText = ticker.name;
    container.appendChild(label);

    checkbox.addEventListener('change', () => {
        holder[index] = checkbox.checked;
        reflushTickers();
    });

    return container;
}


// Adding your own equity

let equityContainer = document.createElement('div');
modalContent.appendChild(equityContainer);
equityContainer.style.setProperty('border', '1px solid black')

let addEquityButton = document.createElement('button');
addEquityButton.innerText = 'Add Custom Equity';
addEquityButton.addEventListener('click', () => createCustomEquityDisplay());
modalContent.appendChild(addEquityButton);

function createCustomEquityDisplay () {
    let container = document.createElement('div');
    container.style.setProperty('border', '1px dashed black');

    let randID = Math.random().toString(36).substring(2);

    // name entry
    let nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name: ';
    nameLabel.setAttribute('for', 'name-input-' + randID);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.id = 'name-input-' + randID;

    container.appendChild(nameLabel);
    container.appendChild(nameInput);

    let csvLabel = document.createElement('label');
    csvLabel.innerText = "CSV Input (date,price):";
    csvLabel.setAttribute('for', 'csv-input-' + randID);

    let csvTextarea = document.createElement('textarea');
    csvTextarea.setAttribute('rows', '10');
    csvTextarea.id = 'csv-input-' + randID;

    container.appendChild(csvLabel);
    container.appendChild(csvTextarea);

    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';

    let thisTicker = {
        get name () {
            return nameInput.value;
        },
        get csv () {
            return csvTextarea.value;
        },
        enabled: true
    };
    customTickers.push(thisTicker);
    displayTickers();
    reflushTickers();


    removeButton.addEventListener('click', () => {
        customTickers.splice(customTickers.indexOf(thisTicker), 1);
        reflushTickers(); // make sure to remove it from active ticker list
    });

    equityContainer.appendChild(container);
}


// Add styles

let styleElement = document.createElement('style');
// taken from micromodal demo page
styleElement.innerText = `.modal {
  font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__container {
  background-color: #fff;
  padding: 30px;
  max-width: 500px;
  max-height: 100vh;
  border-radius: 4px;
  overflow-y: auto;
  box-sizing: border-box;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__title {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #00449e;
  box-sizing: border-box;
}

.modal__close {
  background: transparent;
  border: 0;
}

.modal__header .modal__close:before { content: "\\2715"; }

.modal__content {
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: rgba(0,0,0,.8);
}

.modal__btn {
  font-size: .875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  background-color: #e6e6e6;
  color: rgba(0,0,0,.8);
  border-radius: .25rem;
  border-style: none;
  border-width: 0;
  cursor: pointer;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  line-height: 1.15;
  margin: 0;
  will-change: transform;
  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: -webkit-transform .25s ease-out;
  transition: transform .25s ease-out;
  transition: transform .25s ease-out,-webkit-transform .25s ease-out;
}

.modal__btn:focus, .modal__btn:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.modal__btn-primary {
  background-color: #00449e;
  color: #fff;
}

@keyframes mmfadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}

@keyframes mmfadeOut {
    from { opacity: 1; }
      to { opacity: 0; }
}

@keyframes mmslideIn {
  from { transform: translateY(15%); }
    to { transform: translateY(0); }
}

@keyframes mmslideOut {
    from { transform: translateY(0); }
    to { transform: translateY(-10%); }
}

.micromodal-slide {
  display: none;
}

.micromodal-slide.is-open {
  display: block;
}

.micromodal-slide[aria-hidden="false"] .modal__overlay {
  animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

.micromodal-slide[aria-hidden="false"] .modal__container {
  animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);
}

.micromodal-slide[aria-hidden="true"] .modal__overlay {
  animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

.micromodal-slide[aria-hidden="true"] .modal__container {
  animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);
}

.micromodal-slide .modal__container,
.micromodal-slide .modal__overlay {
  will-change: transform;
}`;

document.body.appendChild(styleElement);

// Init it
MicroModal.init();

// The open modal button

let openModalButton = document.createElement('button');
openModalButton.innerText = "Mod Settings";

openModalButton.addEventListener('click', function () {
    console.log("Open Modal button clicked");
    displayTickers();
    MicroModal.show('modal-1');
});

document.getElementById('full-header').appendChild(openModalButton);




reflushTickers();



let orig_loadTicker = loadTicker; // unmodified version
loadTicker = function (ticker) {
    let isCustom = typeof(ticker.csv) === 'string'; // is it a custom ticker
  var qu = queue();
  if (!isCustom) {
      qu.defer(d3.csv, "data/prices/" + ticker.ticker + ".csv");
  }

  if (!isCustom) { // disabling it if it is custom, because I don't know if it would work.
      if(gameConfig.ghost) {
          qu.defer(getTrades, ticker.ticker, undefined);
      } else if(ticker.ticker === gameConfig.ticker && gameConfig.gameid) {
          qu.defer(getTrades, ticker.ticker, gameConfig.gameid);
      }
  }

  qu.awaitAll(function(err, data) {
      if (isCustom) {
          data.unshift(d3.csv.parse(ticker.csv));
      }
    console.log('data', data);
    var stock = processData(ticker, data[0]);

    if(data.length > 1) {
      stock.competitor = data[1];
      stock.competitor.trades.forEach(function(d,i) {
        d.final = d[1];
      });
      stock.competitor.gameid = gameConfig.ghost ? "ghost" : +gameConfig.gameid;
    }

    d3.selectAll(".levels .chart-item").remove();

    d3.select(".levels")
      .style("z-index", "2")
      .append("div.chart-item")
      .style("z-index", d3.selectAll(".levels > div").size())
      .datum(stock)
      .call(playLevel);
  });
}