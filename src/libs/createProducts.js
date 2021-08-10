//get product model
import { product } from "../models/products";
//get function to create product
import { CalcCashDiscount, toNumber, CalcDiscount, CalcRelevance } from "./functions";

//create a list of products
export const createListProducts = async (array, object) => {
    //array for relevances
    const acumnRate = [];
    const acumCashDiscount = []
    const acumRelevantCategory = []

    //array for list of products
    const info = []
    //data transformation from array
    array.forEach(element => {
        //handel functions from external file
        let products = element.productos;
        if (products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                const name = products[i].nombre;
                const price = toNumber(
                    products[i].precio
                );
                const rate = products[i].calificacion;
                acumnRate.push(rate);
                const category = element.categoria;
                const category_importance = element.importancia;
                acumRelevantCategory.push(category_importance)
                const priceUp = toNumber(products[i].precio_alto);
                const cash_discount = CalcCashDiscount(price, priceUp);
                acumCashDiscount.push(cash_discount);
                const discount = CalcDiscount(price, priceUp);
                const newProduct = new product(name, price, discount, cash_discount, rate, category, category_importance);
                info.push(newProduct)
            }
        }
    });

    //data transformation from object
    const products = object.products //extract array from object
    
    products.forEach(productItem => {

        //handel arrow funcions
        const item = productItem.product_data
        const name = item.name;
        const price = item.price;
        const discount = item.discount || 0;
        const cash_discount = () => {
            var cash_discount;
            if (discount === 0) {
                cash_discount = 0
            } else {
                cash_discount = (price * discount) / 100;
            }
            return cash_discount;
        };
        const rate = item.rate;
        const category = () => {
            const categoryProduct = item.categories[0].category_id;
            const listCategories = object.categories;
            var category
            listCategories.forEach(element => {
                if (element.id === categoryProduct) {
                    category = element.name
                }
            });
            return category
        };
        const category_importance = () => {
            var category_importance;
            const listCategories = object.categories;
            const nameCategory = category();
            listCategories.forEach(element => {
                if (element.name === nameCategory) {
                    category_importance = element.importance
                }
            });
            return category_importance;
        };
        acumnRate.push(rate);
        acumRelevantCategory.push(category_importance())
        acumCashDiscount.push(cash_discount());
        const newProduct = new product(
            name,
            price,
            discount,
            cash_discount(),
            rate,
            category(),
            category_importance(),
        );
        info.push(newProduct)
    });

        //extract max number of array for relevances
        const maxRate = Math.max.apply(null, acumnRate)
        const maxRelevantCategory = Math.max.apply(null, acumRelevantCategory);
        const maxCashDiscount = Math.max.apply(null, acumCashDiscount)

        //iterate for each object in array and add relevances
        for(let i = 0; i<info.length; i++){
            //calculated in external file
            const relevance = CalcRelevance(maxRate , maxRelevantCategory, maxCashDiscount, info[i].rate, info[i].category_importance, info[i].cash_discount);
            //add relevance
            info[i].relevance = relevance
        }
        //sorted objects by relevance
    info.sort(function (a, b){
        return (b.relevance - a.relevance)
    });
    //return list of products
    return info;
}