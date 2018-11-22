const emptyBalance = 0;
let newBalance = emptyBalance;
let booksInBasket= 0;
let booksToBeDiscounted = 0;

function addToBasket(book, copies){
    if (booksToBeDiscounted > 0) {
        booksInBasket = booksToBeDiscounted;
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
        booksToBeDiscounted = booksInBasket;
        newBalance *= 0.75;
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
};