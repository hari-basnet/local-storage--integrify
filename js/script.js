// selectors 
const itemDescription = document.querySelector('#description');
const itemAmount = document.querySelector('#amount');
const incomeBox = document.querySelector('.income-box');
const select = document.querySelector('#selection');
const incomeData = document.querySelector('.income-data');
const expenseData = document.querySelector('.expense-data');
const addButton = document.querySelector('.btn-add');

let isValidated = false;


// creating object to store in the local storage
const accountBalance = {
    name: 'Hari',
    incomes: {
        description: ['salary', 'sales', 'company revenue'],
        amount: [20000, 3000, 1000]
    },

    expenses: {
        description: ['rent', 'carinsurance'],
        amount: [800, 1200]
    }

};


function createContent() {


    let selectedValue = select.options[select.selectedIndex].value;

    let showAccount = JSON.parse(localStorage.getItem('accountBalance'));
    console.log(showAccount);


    if (selectedValue == 'income') {

        incomeData.innerHTML = '';
        accountBalance.incomes.description.push(itemDescription.value);
        accountBalance.incomes.amount.push(parseInt(itemAmount.value));


        showAccount.incomes.amount.forEach(element => {
            incomeData.innerHTML += `<span>${element}</span><br>`;
        });
        // incomeArray.push(parseInt(itemAmount.value));
    }

    else if (selectedValue == 'expense') {
        accountBalance.expenses.description.push(itemDescription.value);
        accountBalance.expenses.amount.push(parseInt(itemAmount.value));


        expenseData.innerHTML = '';
        showAccount.expenses.amount.forEach(element => {
            expenseData.innerHTML += `<span>${element}</span><br>`;
        });
    }
    else {
        console.log('select either income or expense');

    }


}



function storeDataInLocal() {

}
// function checkBalance() {


// }

// action listener 
addButton.addEventListener('click', function (e) {
    let stringifiedAccountBalance = JSON.stringify(accountBalance, undefined, 2);
    localStorage.setItem('accountBalance', stringifiedAccountBalance);
    isValidated = true;
    if (isValidated) {
        createContent();
    }
});

createContent();



