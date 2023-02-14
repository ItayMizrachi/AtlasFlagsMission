import Class from "./class.js";



export const doApi = async (search) => {
    let url = (`https://restcountries.com/v3.1/name/${search}`);
    
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        Atlas(data);

    }
    catch(err){
        console.log(err);
        alert("Try another country")
    }
}

const Atlas = (ar) => {
    document.querySelector("#id_parent").innerHTML = "";
    let country = new Class("#id_parent", ar[0],  stateBorders, doApi);
    country.render();
}



const stateBorders = async (codeCountry) => {
    let url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
   
    let resp = await fetch(url);
    let data = await resp.json();
    let fullCountry = await (data[0].name.common);
    return fullCountry;
}


