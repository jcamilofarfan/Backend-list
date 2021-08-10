import { data } from "../api/api";
import { createListProducts } from "../libs/createProducts";

export async function getdata(req, res) {
    const info = await data();
    const one = info.dataOne;
    const two = info.dataTwo;
    if(Array.isArray(one)){
        let info = await createListProducts(one, two);
        res.json({
            info
        })
    }else{
        let info = await createListProducts(two, one);
        res.json({
            info
        })
    }
}