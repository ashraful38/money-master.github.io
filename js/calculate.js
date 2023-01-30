function inputElementValueId(elementId) {
    const elementField = document.getElementById(elementId);
    const inputValueString = elementField.value;
    const inputValue = parseFloat(inputValueString);

    return inputValue;
}



document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = inputElementValueId('income');
    

    const food = inputElementValueId('food');
    const rent = inputElementValueId('rent');
    const clothes = inputElementValueId('clothes');

    if (fodd >0) {
        alert('Input must be positive Number');
        console.log('input');
        
    } 
    else {
        const expense = food + rent + clothes;
        const balance = income - expense;
        if (expense > income) {
            alert("Expenses cannot be more than income");
        } else {
            // view total expense and balance
            document.getElementById("total-expense").innerText = expense;
            document.getElementById("balance").innerText = balance;
        }
    }

    

})