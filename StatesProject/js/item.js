import Class from "./class.js";

export const doApi = async (search) => {
    let url = `https://restcountries.com/v3.1/name/${search}`;
    try {
        let resp = await axios.get(url);
        let data = resp.data;
        Atlas(data);
    } catch (err) {
        console.log(err);
        alert("Try another country");
    }
};

const Atlas = (ar) => {
    document.querySelector("#id_parent").innerHTML = "";
    let country = new Class("#id_parent", ar[0], stateBorders, doApi);
    country.render();
};

const stateBorders = async (codeCountry) => {
    let url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
    let resp = await axios.get(url);
    let data = resp.data;
    let fullCountry = await data[0].name.common;
    return fullCountry;
};


