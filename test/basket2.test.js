const basket = require('../app/basket2');

test('check that balance is updated after adding a book to empty basket', () => {
    //starting condition
    expect(basket.getEmptyBalance()).toBe(0);

    //Given
    let fantasticMrFox = {
        price: 7,
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: "12345678",
        type: "hardback"
    };

    //When
    basket.addToBasket(fantasticMrFox, 1);

    //Then
    expect(basket.getBalance()).toBe(7);
  }); //end of test 1

  test('Check that balance is updated when a book is removed from basket that is not empty',() => {
    //starting condition
    expect(basket.getBalance()).toBe(7);

    //Given
    let fantasticMrFox = {
    price: 7,
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    isbn: "12345678",
    type: "hardback"
};

//When
basket.removeFromBasket(fantasticMrFox, 1);

//Then
expect(basket.getBalance()).toBe(0);
}); //end of test 2

test('Check balance when multiple books added to empty basket',() => {
    //starting condition
    expect(basket.getEmptyBalance()).toBe(0);

    //Given
    let fantasticMrFox = {
        price: 7,
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: "12345678",
        type: "hardback"
    };

//when
basket.addToBasket(fantasticMrFox, 2);

//Then
expect(basket.getBalance()).toBe(14);

}); //end of test 3

test('Check that balance is updated when multiple books are removed from basket that is not empty',() => {
    //starting condition
    expect(basket.getBalance()).toBe(14);

    //Given
    let fantasticMrFox = {
    price: 7,
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    isbn: "12345678",
    type: "hardback"
};

//When
basket.removeFromBasket(fantasticMrFox, 2);

//Then
expect(basket.getBalance()).toBe(0);
}); //end of test 4


test('Check that if more than 10 books added a 25% discount is applied to any over 10' , () => {
    //starting condition
    expect(basket.getEmptyBalance()).toBe(0);

    //Given
    let fantasticMrFox = {
        price: 7,
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: "12345678",
        type: "hardback"
    };

    //When 
    basket.addToBasket(fantasticMrFox,11);

    //Then
    expect(basket.getBalance()).toBe(75.25);
});

test('Check that discount recalculated if books added after discount applied', () => {
    //starting condition & Given
    expect(basket.getBalance()).toBe(75.25);

    //Given
    let fantasticMrFox = {
        price: 7,
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: "12345678",
        type: "hardback"
    };

    //when
    basket.addToBasket(fantasticMrFox, 3);

    //Then
    expect(basket.getBalance()).toBe(91);
});

test('Check that balance is zero if basket reset', () => {
    //starting condition & Given
    expect(basket.getBalance()).toBe(91);

    //When
    basket.resetBasket();

    //Then
    expect(basket.getBalance()).toBe(0);
});