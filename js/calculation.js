// Calculate your Expense from your inncome.
function expenseCalculate() {
    var income, foodcost, houserent, myClothes, expense;
    income = Number(document.getElementById("income").value);
    foodcost = Number(document.getElementById("food").value);
    houserent = Number(document.getElementById("rent").value);
    myClothes = Number(document.getElementById("clothes").value);
    expense = foodcost + houserent + myClothes;
    myBalance = income - expense;
    document.getElementById("totalExpense").value = expense;
    document.getElementById("balance").value = myBalance;
}

//Save your Money 

function saveMoney() {

    // Calculate the percent ammount from your income.
    var percent = document.getElementById("percent").value;
    var num = document.getElementById("income").value;
    document.getElementById("save-amount")
        .value = (num / 100) * percent;

    // Calculate the Total remain Balance of your Mini Bank.

    var previousBalance = document.getElementById("balance").value;
    var saveBalance = document.getElementById("save-amount").value;
    document.getElementById("remainBalance")
        .value = previousBalance - saveBalance;
}

