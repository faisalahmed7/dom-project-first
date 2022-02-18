/* Calculating Expense  */
function totalExpenseCalculate() {
    const incomeInput = Number(document.getElementById("income-field").value);
    const foodcostInput = Number(document.getElementById("food-field").value);
    const houserentInput = Number(document.getElementById("rent-field").value);
    const myClothesInput = Number(document.getElementById("clothes-field").value);
    let expenseTotal = foodcostInput + houserentInput + myClothesInput;
    let myRemainingBalance = incomeInput - expenseTotal;
    document.getElementById('expense-field').value = expenseTotal;
    document.getElementById('balance-field').value = myRemainingBalance;

}
/* Handled by Calculate button */

document.getElementById('expense-btn').addEventListener('click', function () {
    totalExpenseCalculate();
})


/* Savings From Income */

function saveAmount() {
    const percentCalculate = document.getElementById("percent-field").value;
    const amount = document.getElementById("income-field").value;
    document.getElementById('savings-field').value = (amount / 100) * percentCalculate;

    /* Calculate Remaining Expense. */

    const previousBalance = document.getElementById("balance-field").value;
    const saveBalance = document.getElementById("savings-field").value;
    document.getElementById('remaining-field').value = previousBalance - saveBalance;
}
/* Handled by Save button */
document.getElementById('save-btn').addEventListener('click', function () {
    saveAmount();
})
