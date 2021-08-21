let totalBill = 1299;
let memoryPrice = 0, ssdPrice = 0, deliveryPrice = 0, promoMatch = 0;

const memory8GB = document.getElementById('memory8GB');
memory8GB.addEventListener('click', function () {
    memoryPrice = 0;
    totalBillShow();
});

const memory16GB = document.getElementById('memory16GB');
memory16GB.addEventListener('click', function () {
    memoryPrice = 180;
    totalBillShow();
});

const SSD256GB = document.getElementById('SSD256GB');
SSD256GB.addEventListener('click', function () {
    ssdPrice = 0;
    totalBillShow();
});
const SSD512GB = document.getElementById('SSD512GB');
SSD512GB.addEventListener('click', function () {
    ssdPrice = 100;
    totalBillShow();
});
const SSD1TB = document.getElementById('SSD1TB');
SSD1TB.addEventListener('click', function () {
    ssdPrice = 180;
    totalBillShow();
});

const deliveryPrime = document.getElementById('deliveryPrime');
deliveryPrime.addEventListener('click', function () {
    deliveryPrice = 0;
    totalBillShow();
});
const deliveryRegular = document.getElementById('deliveryRegular');
deliveryRegular.addEventListener('click', function () {
    deliveryPrice = 20;
    totalBillShow();
});

function totalBillShow() {

    document.getElementById("memoryBill").innerText = memoryPrice;
    document.getElementById("ssdBill").innerText = ssdPrice;
    document.getElementById("deliveryBill").innerText = deliveryPrice;

    totalBill = 1299 + memoryPrice + ssdPrice + deliveryPrice;
    document.getElementById("totalBill").innerText = totalBill;
    totalBillAfterPromo();
}

const applyButton = document.getElementById('applyButton');
applyButton.addEventListener('click', function () {
    const promoCode = document.getElementById("promoCode").value;
    if (promoCode.toLowerCase() == "stevekaku")
        promoMatch = 0.2;
    else
       promoCode=0;
    totalBillAfterPromo();
});

function totalBillAfterPromo() {
    let BillAfterPromo=totalBill*promoMatch;
    BillAfterPromo=totalBill-BillAfterPromo;
    document.getElementById("promoTotalBill").innerText = BillAfterPromo;
}