function getInputElementValueId(elementId) {
    const elementField = document.getElementById(elementId);
    const inputValueString = elementField.value;
    const inputValue = parseFloat(inputValueString);

    return inputValue;
   
}

function dd(elementId){
    const elementField = document.getElementById(elementId);
    //elementField.value = '';
    return elementField.value;

}



function setTextElementValueById(elementId, newValue) {
    const textElementId = document.getElementById(elementId);
    textElementId.innerText = newValue;
}



document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = getInputElementValueId('income');


    const food = getInputElementValueId('food');
    const foodField = dd('food')
    const rent = getInputElementValueId('rent');
    const rentField = dd('rent');
    const clothes = getInputElementValueId('clothes');
    const clothesFiled = dd('clothes');
    





    if (rentField === '' || foodField === '' || clothesFiled === '' ) {
        
        alert('please give the number')
    }
    else if (income<0 || food < 0 || rent < 0 || clothes < 0) {
        alert('Input must be positive Number');
    } 
    else{
        const expense = food + rent + clothes;
        const balance = income - expense;
        if (expense > income) {
            alert("Expenses cannot be more than income");
        } else {
            // view total expense and balance
            setTextElementValueById('total-expense', expense);
            //document.getElementById("total-expense").innerText = expense;
            setTextElementValueById('balance', balance);
        }

    }

    







})

document.getElementById('save-btn').addEventListener('click', function () {
    const save = getInputElementValueId('save');
    const income = getInputElementValueId('income');
    //const balance = inputElementValueId('balance')
    if (save < 0 || save > 100) {
        alert("Provide positive and less than 100 saving value");
        return;
    }

    savingAmount = (save / 100) * income;
    const balance = document.getElementById("balance").innerText;
    const remainingBalance = balance - savingAmount;

    //   validate saving amount
    if (savingAmount > balance) {
        alert("SavingAmount is greater than balance");
    } else {
        // view saving amount and remaining balance
        document.getElementById("saving-amount").innerText = savingAmount;
        document.getElementById("remaining-balance").innerText = remainingBalance;
    }



})