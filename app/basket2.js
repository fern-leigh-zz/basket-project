let balance = 0;
let itemsInBasket = [];


function addToBasket(book, copies) {
    for (i = 0; i < copies; i++) {
        itemsInBasket.push(book);
    };
};

function findBookInBasket(book) {
    let isbnNumberToCheck = book.isbn;
    let result = itemsInBasket.filter(val => val.isbn == isbnNumberToCheck);
    return result;
};

function removeFromBasket(book, copies) {
    for (i = 0; i < copies; i++) {
        let result = findBookInBasket(book);
        if (result.length >= i) {
            let indexToRemove = itemsInBasket.indexOf(book);
            itemsInBasket.splice(indexToRemove, 1);
        };
    };
};


function compare(a, b) {
    if (a.price < b.price)
        return -1;
    if (a.price > b.price)
        return 1;
    return 0;
}

function sortAndReverse() {
    itemsInBasket.sort(compare);
    itemsInBasket.reverse();
    return itemsInBasket;
};

function subTotal() {
    balance = 0;
    const basket = sortAndReverse();
    let limit = (basket.length - 1);
    if (basket.length <= 10) {
        for (i = 0; i <= limit; i++) {
            balance += basket[i].price;
        };
    } else if (basket.length > 10) {
        for (i = 0; i <= 9; i++) {
            balance += basket[i].price;
        };
        for (i = 10; i <= limit; i++) {
            let discountedPrice = (basket[i].price * 0.75);
            balance += discountedPrice;
        };
    };
};


function emptyBasket(){
    itemsInBasket = [];
    balance = 0;
}


function getItems() {
    return itemsInBasket.length;
};


function getBalance() {
    //if (itemsInBasket.length > 10) {
        subTotal();
    //};
    return balance
};


module.exports = {
    addToBasket,
    findBookInBasket,
    removeFromBasket,
    sortAndReverse,
    subTotal,
    getItems,
    getBalance, 
    emptyBasket
};
