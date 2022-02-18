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

