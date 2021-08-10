//product model whitout relevance
export function product (name, price, discount, cash_discount, rate, category, category_importance){
    this.name = name; //string
    this.price = price; //number
    this.discount = discount; //number
    this.cash_discount = cash_discount; //number
    this.rate = rate; //number
    this.category = category; //string
    this.category_importance = category_importance; //number
}