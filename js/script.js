// selectors 
const itemDescription = document.querySelector('#description');
const itemAmount = document.querySelector('#amount');
const incomeBox = document.querySelector('.income-box');
const select = document.querySelector('#selection');
const incomeData = document.querySelector('.income-data');
const expenseData = document.querySelector('.expense-data');
const addButton = document.querySelector('.btn-add');
const incomeArray = []
const expenseArray = []
let isValidated = false;


function checkSelection() {

}

function createContent() {


    let selectedValue = select.options[select.selectedIndex].value;
    console.log(select.options);

    if (selectedValue == 'income') {
        incomeData.innerHTML += `<div>
        <span>${itemDescription.value}</span>
        <span>${itemAmount.value}€</span>
        </div>`;
        // incomeArray.push(parseInt(itemAmount.value));
    }

    else if (selectedValue == 'expense') {
        expenseData.innerHTML += `<div>
        <span>${itemDescription.value}</span>
        <span>${itemAmount.value}€</span>
        </div>`;
        console.log('expense');
    }
    else {
        console.log('select either income or expense');

    }
}

function checkBalance() {


}



// action listener 
addButton.addEventListener('click', function (e){
    isValidated = true;
    if(isValidated){
        createContent();
    }
});
