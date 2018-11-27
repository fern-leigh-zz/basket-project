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