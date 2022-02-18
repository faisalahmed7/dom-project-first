// Calculating Expense 
function totalExpenseCalculate() {
    const incomeInput = Number(document.getElementById("income-field").value);
    const foodcostInput = Number(document.getElementById("food-field").value);
    const houserentInput = Number(document.getElementById("rent-field").value);
    const myClothesInput = Number(document.getElementById("clothes-field").value);
    let expense = foodcostInput + houserentInput + myClothesInput;
    let myBalance = incomeInput - expense;
    document.getElementById("expense-field").value = expense;
    document.getElementById("balance-field").value = myBalance;


    income.value = '';

}


document.getElementById('expense-btn').addEventListener('click', function () {
    totalExpenseCalculate();


})
//Savings From Income 

function saveAmount() {
    const percent = document.getElementById("percent-field").value;
    const num = document.getElementById("income-field").value;
    document.getElementById("savings-field").value = (num / 100) * percent;

    // Calculate the Total remain Balance of your Mini Bank.

    const previousBalance = document.getElementById("balance-field").value;
    const saveBalance = document.getElementById("savings-field").value;
    document.getElementById("remaining-field")
        .value = previousBalance - saveBalance;
}

document.getElementById('save-btn').addEventListener('click', function () {
    saveAmount();
})
