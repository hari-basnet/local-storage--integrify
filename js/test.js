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
], addIncome: function (description, amount) {
        // let json = localStorage.getItem('incomes')
        // const retreivedFromLocal = JSON.parse(json);
        // let time = displayDateTime();
        // this.incomes.push({description, amount, time});
        // retreivedFromLocal.push({description, amount, time});
        // localStorage.setItem('incomes', retreivedFromLocal)
        // console.log(retreivedFromLocal);

        
    }, 
    addExpense: function (description, amount) {
        let time = displayDateTime();
        this.incomes.push({description, amount, time});
        
    },
    totalIncome: function () {
        let sum = 0;
        this.incomes.forEach(element => {
            sum = sum + element.amount;
            
        });
        return sum;
    },
    totalExpense: function () {
        let sum = 0;
        this.expenses.forEach(element => {
            sum = sum + element.amount;
            
        });
        return sum;
    },
    calculateBalance: function () {
        let balance = this.totalIncome() - this.totalExpense();
        return balance;
    },
}

// localStorage.setItem('incomes', JSON.stringify(accountBalance.incomes, undefined, 2));
// localStorage.setItem('expenses', JSON.stringify(accountBalance.expenses, undefined, 2));

// console.log(accountBalance.totalIncome());
// console.log(accountBalance.totalExpense());
// function setToLocal(){
//     let stringifiedAccount = JSON.stringify(accountBalance, undefined, 2);
//     localStorage.setItem('accountBalance', stringifiedAccount);
// }
// setToLocal();

// function getFromLocal(){
//     let unStringifiedAccount = JSON.parse(localStorage.getItem('accountBalance'));
//     // let {a,b} = unStringifiedAccount.expense;
//     let {description, amount} = unStringifiedAccount.income;

//     console.log(unStringifiedAccount.expense);
//     description.forEach(description =>{
//         incomeData.innerHTML += `<div><span>${description}</span></div>`;
//     })

//     amount.forEach(element =>{
//         incomeData.innerHTML += `<div><span>${element}</span></div>`;
//     })

//     // a.forEach(element =>{
//     //     expenseData.innerHTML += `<div><span>${element}</span></div>`;
//     // })
//     // b.forEach(element =>{
//     //     expenseData.innerHTML += `<div><span>${element}</span></div>`;
//     // })


    
// }



// function pushToObject() {
    
//     let selectedValue = select.options[select.selectedIndex].value;
//     // console.log(selectedValue)
//     if (selectedValue === 'income') {
//         accountBalance.income.description.push(itemDescription.value);
//         accountBalance.income.amount.push(parseInt(itemAmount.value));

//     } else if (selectedValue === 'expense') {
//         accountBalance.expense.description.push(itemDescription.value);
//         accountBalance.expense.amount.push(parseInt(itemAmount.value));
//     } else {
//         console.log('Please select an option');
//     }
    
// }

// function checkBalance() {

//     let sumIncome = 0;
//     let sumExpense = 0;

//     accountBalance.income.amount.forEach(element => {
//         sumIncome += element;
//     });

//     accountBalance.expense.amount.forEach(element => {
//         sumExpense += element;
//     });

//     let balance = sumIncome - sumExpense
//     console.log(balance);
//     sectionBalance.innerHTML = `<span>Your current balance is: ${balance}€</span>`;
//     return balance;
// }

// addButton.addEventListener('click', function () {
//     pushToObject();
//     checkBalance();       
// })

// getFromLocal();

function displayDateTime(){
    var myDate = new Date();

    var dd = myDate.getDate();
    var mm = myDate.getMonth() + 1;
    var yyyy = myDate.getFullYear();
    var myTime = myDate.getTime();
    var hrs = myDate.getHours();
    var min = myDate.getMinutes();

    if (dd<10){
        dd = "0" + dd;
    }

    if (mm <10){
        mm = "0" + mm;
    }

    var setDate = `The date is ${dd}/${mm}/${yyyy} ${hrs}:${min} `;
    
    return setDate;
}
