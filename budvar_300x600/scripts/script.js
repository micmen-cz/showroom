var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("banner_id");

    addEventListeners();
}

function addEventListeners() {
    document.getElementById("creativelink").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
}

window.addEventListener("load", initEB);
