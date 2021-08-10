//transform string to Number - specific format "$0.000"
export const toNumber = (string) =>{
    if(string){
        var number = string.replace('$', '');
        number = number.replace('.', '')
        number = Number(number)
        return number;
    }else{
        return 0;
    }
}

//whith high_price and price calculate discount
export const CalcDiscount = (price, priceUp)=>{
    var discount;
    if(priceUp === 0){
        discount = 0;
    }else{
        discount = 100-((price * 100)/priceUp)
    }
    return discount
}

//whith high_price and price calculate Cash Discount
export const CalcCashDiscount = (price, priceUp)=>{
    var cashDiscount;
    if (priceUp === 0){
        cashDiscount = 0
    }else{
        cashDiscount = priceUp - price
    }
    return cashDiscount
}

//calculate relevance data whith objects data
export const CalcRelevance = (maxRate , maxRelevantCategory, maxCashDiscount, rate, RelevantCategory, CashDiscount)=>{
    const dataRate = average(rate,maxRate, 0.3);
    const dataRelevantCategory = average(RelevantCategory,maxRelevantCategory, 0.2);
    const dataCashDiscount = average(CashDiscount,maxCashDiscount, 0.5);
    const relevance = dataRate+dataRelevantCategory+dataCashDiscount
    return relevance;
}

//calculate relevance data whith data, dataMax and contribution
function average(data, dataMax, contributions){
    let dataNum = (data*1)/dataMax;
    dataNum = (dataNum*contributions)/1;
    return dataNum;
}