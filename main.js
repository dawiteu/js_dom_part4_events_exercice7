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


