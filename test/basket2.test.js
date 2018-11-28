
/**
 * I can add a book to my basket. The number of items in my basket will increase by 1, and the price of the book will 
 * be added to the balance.
 * 
 * I can remove a book from my basket. The number of items in my basket will decrease by 1, 
 * and the price of the book will be deducted form the balance. 
 * 
 * I can add multiple items to my basket. The number of items will increase according to the amount of books I have
 * added and the price of each book I add will be added to the balance. 
 * 
 * I can remove multiple books from my basket. The number of items in my basket will derease by the amount of books
 * I have removed and the price of each book removed will be deducted form the balance.
 * 
 * If I have more than 10 books in my basket - each additional book I put in will cost 75% of it's original price.
 * 
 * If I remove a discounted book from my basket, my balance will decrease by 75% of the orgiinal price of the book.
 * 
 * If I remove a book that was not discounted from my basket, my balance will decrease by the pric of the book. If there
 * are now 10 or less books in my basket, any previously discounted books will be charged at full price and my balance
 * will be updated accordingly. 
 * 
 */

 /**
 * I can add different books with varying cost to my basket and the price is calculated correctly.
 * 
 * If there are more than 10 books in my basket - the discount is applied to cheapest items. The 10 most expensive 
 * books are charged at full price 
 * 
 * I can remove books of varying price from my basket. If the item was discounted, the discounted price is deducted 
 * from balance. If the item was charged at full price, the full price is deducted from balance. 
 * 
 * My balance cannot drop below zero. 
 * 
 * If a full price item is removed from my basket and there are also discounted items - the balance will be 
 * recalculated so that if there are 10 full price items in the basket. 
 */

const basket2 = require('../app/basket2');

let fantasticMrFox = {
    price: 7,
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    isbn: "435-678",
    copies: 10
};

let YDKJS = {
    price: 3,
    title: "You don't know JS",
    author: "Kyle Simpson",
    isbn: "123-456",
    copies: 3
};

let jamesPeach = {
    price: 8,
    title: "James and the Giant Peach",
    author: "Roald Dahl",
    isbn: "784-782",
    copies: 2
};

let witches = {
    price: 8,
    title: "The Witches",
    author: "Roald Dahl",
    isbn: "784-461",
    copies: 8
};

let C22 = {
    price: 10,
    title: "Catch 22",
    author: "Joseph Heller",
    isbn: "234-789",
    copies: 3
};

test('check that balance is updated after adding a book to empty basket', () => {
    //Given
   expect(basket2.getBalance()).toBe(0);

    //When
    basket2.addToBasket(fantasticMrFox, 1);

    //Then
    expect(basket2.getBalance()).toBe(7);
    expect(basket2.getItems()).toBe(1);
}); //end of test 1

test('check that balance is updated after adding several different books to basket', () => {
    //Given
   expect(basket2.getBalance()).toBe(7);

    //When
    basket2.addToBasket(fantasticMrFox, 1);
    basket2.addToBasket(jamesPeach, 2);
    basket2.addToBasket(C22, 1);

    //Then
    expect(basket2.getBalance()).toBe(40);
    expect(basket2.getItems()).toBe(5);
}); //end of test 2

test('check that it is possible to locate copies of a book in the basket', () => {
    //Given
    expect(basket2.getItems()).toBe(5);

    //When
    let copies = basket2.findBookInBasket(fantasticMrFox);

    //Then
    expect(copies.length).toBe(2);
    expect(copies[0].title).toBe("Fantastic Mr Fox");
    expect(copies[1].title).toBe("Fantastic Mr Fox");
    expect(copies[0].price).toBe(7);
}); //end of test 3

test('Check that balance is updated when a book is removed from basket that is not empty', () => {
    //Given
    expect(basket2.getBalance()).toBe(40);

    //When
    basket2.removeFromBasket(fantasticMrFox, 1);

    //Then
    expect(basket2.getBalance()).toBe(33);
    expect(basket2.getItems()).toBe(4);
}); //end of test 4

test('Check that balance is updated when multiple books are removed from basket that is not empty', () => {
    //Given
    expect(basket2.getBalance()).toBe(33);

    //When
    basket2.removeFromBasket(jamesPeach, 2);

    //Then
    expect(basket2.getBalance()).toBe(17);
    expect(basket2.getItems()).toBe(2);
}); //end of test 5

test('Check that you cannot remove more copies of a book from a basket that are in the basket', () => {
    //Given
    expect(basket2.findBookInBasket(C22).length).toBe(1);
    expect(basket2.getBalance()).toBe(17);

    //When
    basket2.removeFromBasket(C22, 2);
    
    //Then
    expect(basket2.getBalance()).toBe(7);
    expect(basket2.getItems()).toBe(1);
}); //end of test 6

test('check the sort and reverse function puts books in descending order by price', () => {
     //Given
     expect(basket2.getBalance()).toBe(7);
     expect(basket2.getItems()).toBe(1);
 
     //When 
     basket2.addToBasket(fantasticMrFox, 3); //price 7
     basket2.addToBasket(C22, 1) //price 10
     basket2.addToBasket(YDKJS, 2); //price 3
     basket2.addToBasket(witches, 3); //price 8 
     basket2.addToBasket(jamesPeach, 4) //price 8

     let basket = basket2.sortAndReverse();

     //Then
     expect(basket[0].title).toBe("Catch 22");
     expect(basket[0].price).toBe(10);
     expect(basket[13].title).toBe("You don't know JS")
     expect(basket[13].price).toBe(3);
});

test('Check that if more than 10 books added a 25% discount is applied to cheapest items', () => {
    //Given
    expect(basket2.getItems()).toBe(14);

    //When 
    //if all items full price, balance is £100 and there are 14 items 
    //(test passes if the above figures are put in the expect statements and below method call is commented out)
    //need to find 4 cheapeast items and apply discount to these
    basket2.subTotal();

    //Then
    expect(basket2.getItems()).toBe(14);
    expect(basket2.getBalance()).toBe(87.5);  
    //four cheapest items are YDKJS * 3 (2.25) and FMF *1 (5.25)
}); //end of test 7

/*test('Check that discount recalculated if books added after discount applied', () => {
    //Given
    expect(basket2.subTotal()).toBe(75.25);

    //when
    basket2.addToBasket(fantasticMrFox, 3);

    //Then
    expect(basket2.subTotal()).toBe(91);
    expect(basket2.getItems()).toBe(14);
}); //end of test 6


test('Check that discounted price of book is deducted from balance if discounted book is removed from basket', () => {
    //Given
    expect(basket2.subTotal()).toBe(91);

    //when
    basket2.removeFromBasket(fantasticMrFox,3);

    //Then
    expect(basket2.subTotal()).toBe(75.25);
    expect(basket2.getItems()).toBe(11);
}); //end of test 7

test('check that if discounted and full price items are removed from basket, the balance is updated accordingly', ()=>{
    //Given
    expect(basket2.subTotal()).toBe(75.25);

    //When
    basket2.removeFromBasket(fantasticMrFox,3);

    //Then
    expect(basket2.subTotal()).toBe(56);
    expect(basket2.getItems()).toBe(8);
}); // end of test 8

test('Check that balance is zero if basket reset', () => {
    //Given
    expect(basket2.subTotal()).toBe(56);

    //When
    basket2.emptyBasket();

    //Then
    expect(basket2.subTotal()).toBe(0);
    expect(basket2.getItems()).toBe(0);
}); // end of test 9 */