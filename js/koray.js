const itemDescription = document.querySelector('#description')
const itemAmount = document.querySelector('#amount')
const addButton = document.querySelector('.btn-add')
const select = document.querySelector('#selection')
const option = document.querySelectorAll('option')
const incomeBox = document.querySelector('.income-box');
const incomeData = document.querySelector('.income-data')
const expenseData = document.querySelector('.expense-data')
const sectionBalance = document.querySelector('.section-balance');
const incomeArray = []

const expenseArray = []

const accountBalance = {
    name: 'Koray',
    lastName: 'Dündar',
    income: {
        description: [],
        amount: []
    },
    expense: {
        description: [],
        amount: []
    }
}



addButton.addEventListener('click', function () {
    createContent();
    // checkBalance();       
})

function createContent() {

    let selectedValue = select.options[select.selectedIndex].value;
    // console.log(selectedValue)
    if (selectedValue === 'income') {
        accountBalance.income.description.push(itemDescription.value);
        accountBalance.income.amount.push(parseInt(itemAmount.value));

        incomeData.innerHTML += `<div>
            <span>${itemDescription.value}</span>
            <span>${itemAmount.value}€</span>
            </div>`;

    } else if (selectedValue === 'expense') {
        accountBalance.expense.description.push(itemDescription.value);
        accountBalance.expense.amount.push(parseInt(itemAmount.value));

        expenseData.innerHTML += `<div>
            <span>${itemDescription.value}</span>
            <span>${itemAmount.value}€</span>
            </div>`;

    } else {
        console.log('Please select an option')

    }

    let accountBalanceStringified = JSON.stringify(accountBalance, undefined, 2);
    localStorage.setItem('accountBalance', accountBalanceStringified);

}

function checkBalance() {

    let sumIncome = 0;
    let sumExpense = 0;

    accountBalance.income.amount.forEach(element => {
        sumIncome += element;
    });

    accountBalance.expense.amount.forEach(element => {
        sumExpense += element;
    });

    let balance = sumIncome - sumExpense
    console.log(balance);
    sectionBalance.innerHTML = `<span>Your current balance is: ${balance}€</span>`;
    return balance;
}
