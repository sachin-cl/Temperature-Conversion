const textbox=document.getElementById("textbox");
const tofarenheit=document.getElementById("tofarenheit");    
const tocelsius=document.getElementById("tocelsius");  
const result=document.getElementById("result");
let temp;



function convert(){
    if(tofarenheit.checked){
        temp=textbox.value;
        temp=Number(temp);
        temp=temp*9/5 +32;
        result.textContent=temp+" farenheit";


    }
    else if(tocelsius.checked){
        temp=textbox.value;
        temp=Number(temp);
        temp=(temp-32)*5/9
        result.textContent=temp+" celsius";

    }
    else{
        result.textContent="Select an unit";
    }
    
}