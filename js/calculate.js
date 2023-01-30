function inputElementValueId(elementId){
    const elementField = document.getElementById(elementId);
    const inputValueString = elementField.value;
    const inputValue = parseFloat(inputValueString) ;

    return inputValue;
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = inputElementValueId('income');
    console.log(income);
    
})