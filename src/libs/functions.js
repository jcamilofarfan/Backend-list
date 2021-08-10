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

export const CalcDiscount = (price, priceUp)=>{
    if(priceUp === 0){
        var discount = 0;
    }else{
        var discount = 100-((price * 100)/priceUp)
    }
    return discount
}

export const CalcCashDiscount = (price, priceUp)=>{
    if (priceUp === 0){
        var cashDiscount = 0
    }else{
        var cashDiscount = priceUp - price
    }
    return cashDiscount
}

export const CalcRelevance = (maxRate , maxRelevantCategory, maxCashDiscount, rate, RelevantCategory, CashDiscount)=>{
    const dataRate = average(rate,maxRate, 0.3);
    const dataRelevantCategory = average(RelevantCategory,maxRelevantCategory, 0.2);
    const dataCashDiscount = average(CashDiscount,maxCashDiscount, 0.5);
    const relevance = dataRate+dataRelevantCategory+dataCashDiscount
    return relevance;
}

function average(data, dataMax, contributions){
    let dataNum = (data*1)/dataMax;
    dataNum = (dataNum*contributions)/1;
    return dataNum;
}