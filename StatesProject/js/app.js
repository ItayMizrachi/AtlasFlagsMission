import { doApi } from "./item.js";
import { declareEvents } from "./countries.js"

const init = () => {
  doApi("israel");
  declareEvents(doApi);
}

init();