export const declareEvents = (doApi) => {
    let id_input = document.querySelector("#id_input")
    let btn_Search = document.querySelector("#btn_Search");

    let state_1 = document.querySelector(`#id_state_1`);
    state_1.addEventListener("click", () => {
        doApi(state_1.innerHTML);
    })
    let state_2 = document.querySelector(`#id_state_2`);
    state_2.addEventListener("click", () => {
        doApi(state_2.innerHTML);
    })
    let state_3 = document.querySelector(`#id_state_3`);
    state_3.addEventListener("click", () => {
        doApi(state_3.innerHTML);
    })
    let state_4 = document.querySelector(`#id_state_4`);
    state_4.addEventListener("click", () => {
        doApi(state_4.innerHTML);
    })
    let state_5 = document.querySelector(`#id_state_5`);
    state_5.addEventListener("click", () => {
        doApi(state_5.innerHTML);
    })

    id_input.addEventListener("keydown", (e) => {
        if (e.key == 'Enter')
            doApi(id_input.value);
    })
    btn_Search.addEventListener("click", () => {
        doApi(id_input.value);
    })
}