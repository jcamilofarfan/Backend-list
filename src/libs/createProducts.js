import { product } from "../models/products";
import { CalcCashDiscount, toNumber, CalcDiscount, CalcRelevance } from "./functions";

export const createListProducts = async (array, object) => {
    const acumnRate = [];
    const acumCashDiscount = []
    const acumRelevantCategory = []

    //se genera un array vacio para guardar los objetos
    const info = []
    //manejo data en array
    array.forEach(element => {
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

    //manejo data en objeto
    const products = object.products
    products.forEach(productItem => {
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


        const maxRate = Math.max.apply(null, acumnRate)

        const maxRelevantCategory = Math.max.apply(null, acumRelevantCategory);

        const maxCashDiscount = Math.max.apply(null, acumCashDiscount)

        for(let i = 0; i<info.length; i++){
            const relevance = CalcRelevance(maxRate , maxRelevantCategory, maxCashDiscount, info[i].rate, info[i].category_importance, info[i].cash_discount);
            info[i].relevance = relevance
        }

    info.sort(function (a, b){
        return (b.relevance - a.relevance)
    });
    return info;
}