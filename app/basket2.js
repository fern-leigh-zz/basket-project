const emptyBalance = 0;
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
};