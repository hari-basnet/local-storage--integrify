const itemDescription = document.querySelector('#description')
const itemAmount = document.querySelector('#amount')
const addButton = document.querySelector('.btn-add')
const select = document.querySelector('#selection')
const option = document.querySelectorAll('option')
const incomeBox = document.querySelector('.income-box');
const incomeData = document.querySelector('.income-data')
const expenseData = document.querySelector('.expense-data')
const sectionBalance = document.querySelector('.section-balance');

const accountBalance = {
    name: 'Koray',
    lastName: 'Dündar',
    incomes: [
        {
            description: 'salary',
            amount: 2000,
            time: displayDateTime()
        }, {
            description: 'Bonus',
            amount: 500,
            time: displayDateTime()
        }
    ],
    expenses: [
        {
            description: 'rent',
            amount: 7000,
            time: displayDateTime()
        },
        {
            description: 'food',
            amount: 500,
            time: displayDateTime()
        }
    ],
    addIncome: function (description, amount) {

        let time = displayDateTime();
        // pushing to the object
        this.incomes.push({ description, amount, time });

        // getting the object from the localstorage and adding user input 
        //and setting it back to local storage
        let json = localStorage.getItem('incomes');
        const retreivedFromLocal = JSON.parse(json);
        retreivedFromLocal.push({ description, amount, time });
        localStorage.setItem('incomes', JSON.stringify(retreivedFromLocal), undefined, 2)
        console.log(retreivedFromLocal);

    },
    addExpense: function (description, amount) {
        let time = displayDateTime();
        this.expenses.push({ description, amount, time });

        let json = localStorage.getItem('expenses');
        const retreivedFromLocal = JSON.parse(json);
        retreivedFromLocal.push({ description, amount, time });
        localStorage.setItem('expenses', JSON.stringify(retreivedFromLocal), undefined, 2);
    },
    totalIncome: function () {
        let sum = 0;
        let dataIncome = JSON.parse(localStorage.getItem('incomes'));
        console.log(dataIncome);
        dataIncome.forEach(element => {
            sum = sum + element.amount;
        });
        return sum;
    },
    totalExpense: function () {
        let sum = 0;
        let dataExpense = JSON.parse(localStorage.getItem('expenses'));
        dataExpense.forEach(element => {
            sum = sum + element.amount;
        });
        return sum;
    },
    calculateBalance: function () {
        let balance = this.totalIncome() - this.totalExpense();

        return sectionBalance.textContent = `Your current balance is: ${balance}`;
    },

    getIncomeData: function () {
        let dataIncome = JSON.parse(localStorage.getItem('incomes'));
        incomeData.innerHTML = '';

        let result = dataIncome.forEach(data => {
            incomeData.innerHTML += `<div class="incomes"><p>${data.description}</p><br>
                <p>${data.amount}</p><br><p>${data.time}</p><br></div>`;
        })
        return result;

    },
    getExpenseData: function () {

        let dataExpense = JSON.parse(localStorage.getItem('expenses'));

        expenseData.innerHTML = '';

        let result = dataExpense.forEach(data => {
            expenseData.innerHTML += `<div class="incomes"><p>${data.description}</p><br>
                <p>${data.amount}</p><br><p>${data.time}</p><br></div>`;
        })
        return result;
    }
}

addButton.addEventListener('click', function () {

    let selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue === 'income') {
        accountBalance.addIncome(itemDescription.value, parseInt(itemAmount.value));
    } else if (selectedValue === 'expense') {
        accountBalance.addExpense(itemDescription.value, parseInt(itemAmount.value));
    } else {
        console.log('Please select an option');
    }
    accountBalance.getIncomeData();
    accountBalance.getExpenseData();
    accountBalance.calculateBalance();
    clearFields();
})

function displayDateTime() {
    var myDate = new Date();

    var dd = myDate.getDate();
    var mm = myDate.getMonth() + 1;
    var yyyy = myDate.getFullYear();
    var hrs = myDate.getHours();
    var min = myDate.getMinutes();

    if (hrs < 10) { hrs = "0" + hrs; }
    if (min < 10) { min = "0" + min; }
    if (dd < 10) { dd = "0" + dd; }
    if (mm < 10) { mm = "0" + mm; }
    var setDate = `${dd}/${mm}/${yyyy} ${hrs}:${min} `;

    return setDate;
}

function clearFields() {
    itemDescription.value = '';
    itemAmount.value = '';
    select.value = 'select';
}
// check of the local storage is empty or not 
if (localStorage.length === 0 || localStorage.length == null) {
    localStorage.setItem('expenses', JSON.stringify(accountBalance.expenses, undefined, 2));
    localStorage.setItem('incomes', JSON.stringify(accountBalance.incomes, undefined, 2));
} else {
    accountBalance.getIncomeData();
    accountBalance.getExpenseData();
    accountBalance.calculateBalance();

}

