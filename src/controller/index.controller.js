//data
import { data } from "../api/api";

import { createListProducts } from "../libs/createProducts";

//function get data, transform and response
export async function getdata(req, res) {
    //get
    const info = await data();
    const one = info.dataOne;
    const two = info.dataTwo;
    //determine which is array
    if(Array.isArray(one)){
        //tranform
        let info = await createListProducts(one, two);
        //response
        res.json({
            info
        })
    }else{
        //transform
        let info = await createListProducts(two, one);
        //response
        res.json({
            info
        })
    }
}