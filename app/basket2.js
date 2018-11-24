let balance = 0;
let itemsInBasket = 0;
let fullPriceItems = 0;
let discountedItems = 0;

function addToBasket(book, copies) {
    for (i = 1; i <= copies; i++) {
        itemsInBasket++;
        if (itemsInBasket > 10) {
            balance += book.price * 0.75;
            discountedItems++;
        } else {
            balance += (book.price);
            fullPriceItems++;
        }
    }
};

function removeFromBasket(book, copies) {
    for (i = 1; i <= copies; i++) {
        if (itemsInBasket > 10) {
            discountedItems--;
            balance -= book.price * 0.75;
        } else {
            fullPriceItems--;
            balance -= (book.price);
        }
        itemsInBasket--;
    }
};

function getItems() {
    return itemsInBasket;
};

function subTotal() {
    return balance;
};

function emptyBasket(){
    itemsInBasket = 0;
    discountedItems = 0;
    fullPriceItems = 0;
    balance = 0;
}

module.exports = {
    addToBasket,
    removeFromBasket,
    subTotal,
    getItems,
    emptyBasket
};






















/*const emptyBalance = 0;
let newBalance = emptyBalance;
let booksInBasket= 0;
let booksToBeDiscounted = 0;
let booksAlreadyChecked = 0;

function addToBasket(book, copies){
    if (booksAlreadyChecked > 0) {
        booksInBasket = booksAlreadyChecked;
        newBalance += (booksToBeDiscounted*7)*0.25;
    }

    for (i = 1; i <=copies; i++) {
    newBalance += (book.price);
    booksInBasket ++;
    }
};

function removeFromBasket(book, copies){
    for (i = 1; i <=copies; i++) {
        newBalance -= (book.price);
        booksInBasket --;
        }
};

function calculateDiscount() {
    if (booksInBasket >= 10) {
        booksToBeDiscounted = (booksInBasket-10);
        let discountedBooksPrice = (booksToBeDiscounted*7)*0.75;
        newBalance = 70+discountedBooksPrice;
        booksAlreadyChecked = booksInBasket;
        booksInBasket = 0;
    }

};

function getBalance() {
    calculateDiscount();
    return newBalance;
};

function getEmptyBalance() {
    return emptyBalance;
}

function resetBasket() {
    newBalance = emptyBalance;
    booksInBasket = 0;
}

module.exports = {
    addToBasket,
    removeFromBasket,
    calculateDiscount,
    getEmptyBalance,
    getBalance,
    resetBasket
};*/