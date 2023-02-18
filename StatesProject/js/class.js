export default class Class {
    constructor(_parent, _item, stateBorders, doApi) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.flag = _item.flags.svg;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.language = Object.keys(_item.languages);
        this.coin = Object.keys(_item.currencies);
        this.coinSymbol = Object.values(_item.currencies)[0].symbol;
        this.coinDescription = Object.values(_item.currencies)[0].name;
        this.capital = _item.capital;
        this.map = _item.latlng;
        this.borders = _item.borders;
        this.doApi = doApi;
        this.stateBorders = stateBorders;
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-md-8 mx-auto p-4 conic text-white";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <img  src="${this.flag}"  alt="${this.name}" class="ms-4 w-50 float-end  ">
        <h2 style="color: #5bc0de;">${this.name}</h2>
        <div><strong>POP</strong>: ${this.pop} </div>
        <div><strong>Region</strong>: ${this.region}</div>
        <div><strong>Languages</strong>: ${this.language}</div>
        <div><strong>Coin:</strong> ${this.coin}, ${this.coinDescription}  ${this.coinSymbol}</div>
        <div><strong>Capital:</strong> ${this.capital}</div>
        <div class="mt-3 "><strong>States with borders:</strong><br>
        <div class="borders_div"></div>
        </div>
        
        <iframe class="mt-4 col-12" height="600" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=6&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
       `

        let borders_div = div.querySelector(".borders_div");
        this.borders.forEach(async (item, index) => {
            let a = document.createElement("a");
            a.innerHTML = await this.stateBorders(item) + " ";
            a.style = "font-weight: bold; font-size: 1.1em; color: #5bc0de; cursor: pointer; padding: 2px; "
            borders_div.append(a);

            if (index !== this.borders.length - 1) {
                let comma = document.createElement("span");
                comma.innerHTML = ", ";
                borders_div.append(comma);
            }

            a.addEventListener("click", () => {
                this.doApi(a.innerHTML);
            })
        })

    }
}