import fetch from "node-fetch"
const apiOne = "https://run.mocky.io/v3/77f7e692-73f3-4676-a4ce-8576dd99ca0c";
import fileOne from "../../data/77f7e692-73f3-4676-a4ce-8576dd99ca0c.json";

const apiTwo = "https://run.mocky.io/v3/26029c20-0eb4-43b1-b8ba-871384052fc7";
import fileTwo from "../../data/26029c20-0eb4-43b1-b8ba-871384052fc7.json";

async function fetchData(api, file){
    try {
        const data = await fetch(api);
        const json = data.json();
        console.log("api found: " + api);
        return json;
    } catch (error) {
        console.log("api not found: " + api);
        return file;
    }
}

export async function data(){
    const dataOne = await fetchData(apiOne, fileOne);
    const dataTwo = await fetchData(apiTwo, fileTwo);
    return {dataOne, dataTwo};
}