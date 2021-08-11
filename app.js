const user_movies = document.querySelector("#num_peliculas");
const netflix = document.querySelector("#netflix");
const amazon = document.querySelector("#amazon");
const disney = document.querySelector("#disney");
const hbo = document.querySelector("#hbo");
const compare_result = document.querySelector("#result")
const result_value = document.querySelector("#result-value")
const error_container = document.querySelector("#error_container")
const close_icon = document.querySelector("#close");
const result1 = document.querySelector("#result-1")

function compare(){
    let user_movies_value = user_movies.value;
    let total_user_movies = user_movies_value * 45;
    let streaming_services_total = estados(netflix, amazon, disney, hbo);

    if(user_movies_value == "" || user_movies_value == 0){
        error_container.classList.add("error")
        close_icon.addEventListener("click", function(){
            error_container.classList.remove("error")
        })
    }
    else {
        if(total_user_movies > streaming_services_total) {
            compare_result.innerHTML = `Te sale más barato ver tus peliculas en tus servicios de streaming.`
            result_value.innerHTML = `Sale en $${streaming_services_total}`
        }
        else {
            compare_result.innerHTML = `Te sale más barato rentar tus peliculas.`
            result_value.innerHTML = `Sale en $${total_user_movies}`
        }
        result1.innerHTML = `Rentas $${total_user_movies} VS Streaming $${streaming_services_total}`    
    }
}

function estados(elemento1, elemento2, elemento3, elemento4){
    let elementos = [elemento1, elemento2, elemento3, elemento4];
    const elementsCheck = elementos.filter((element) => element.checked)
    const elementsTotal = elementsCheck.reduce((acc, item) => acc = acc + Number(item.value), 0)
    return elementsTotal;
}