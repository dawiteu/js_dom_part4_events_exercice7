//1 


const enfBody = document.body.childNodes; 

console.log(enfBody);

document.body.addEventListener("click", (e) => {
    console.log(e.target.nodeName); 
    switch(e.target.nodeName){
        case "DIV":
            e.target.style.border="3px dashed yellow";
        break; 

        case "H1":
            e.target.style.textDecoration="underline";
        break;
        
        case "H2":
            e.target.innerHTML = e.target.innerHTML.substring(0, e.target.innerHTML.length - 1); 
        break;

        case "P":
            e.target.style.cssText="font-weight:bold; color:red;"; 
        break;

        default:
            //none;
        break;
    }
});



// 2

let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"; 


let section = document.querySelector("section"); 
console.log(section); 


section.addEventListener("mouseover", () => {
    console.log('ho0ver');
    section.firstElementChild.innerHTML=text;
    console.log(section.firstElementChild);
});

