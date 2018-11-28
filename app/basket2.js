let balance = 0;
let itemsInBasket = [];
let fullPriceItems = [];
let discountedItems =[];



function addToBasket(book, copies) {
    for (i = 0; i < copies; i++) {
        itemsInBasket.push(book);
        balance += book.price;
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
               balance -= book.price;
            };
        };
};


/*function emptyBasket(){
    itemsInBasket = 0;
    discountedItems = 0;
    fullPriceItems = 0;
    balance = 0;
}
*/


function getItems() {
    return itemsInBasket.length;
};

/*function subTotal() {
    for (i=0; i <= itemsInBasket.length; i++){
        balance += itemsInBasket[i].price;
    }
}; */

function getBalance(){
    return balance
};


module.exports = {
    addToBasket,
    getItems,
    getBalance,
    findBookInBasket,
    removeFromBasket
};
