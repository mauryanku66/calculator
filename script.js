let input = document.querySelectorAll(".number");
let resultDisplay = document.querySelector("#input");
let calc = document.querySelector("#equal")
let clear = document.querySelector(".clear");
input.forEach(element => {

    element.addEventListener("click",()=>{
        console.log(element.innerText);
       
        resultDisplay.value = resultDisplay.value+element.innerText;
        return resultDisplay.value;
    })
    
});
calc.addEventListener("click",()=>{
    let total = eval(resultDisplay.value)
    resultDisplay.value = total
})
clear.addEventListener("click", ()=>{
    resultDisplay.value = "";
})