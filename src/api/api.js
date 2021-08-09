const apiOne = "https://run.mocky.io/v3/77f7e692-73f3-4676-a4ce-8576dd99ca0c";
const apiTwo = "https://run.mocky.io/v3/26029c20-0eb4-43b1-b8ba-871384052fc7";


//fetch data from apiOne
export async function fetchDataOne() {
    const resultOne = await fetch(apiOne);
    console.log(resultOne);
}

//fetch data from apiTwo
export async function fetchDataTwo() {
    const resultTwo = await fetch(apiTwo);
    console.log(resultTwo);
}