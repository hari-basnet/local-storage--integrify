// selectors 
const itemDescription = document.querySelector('.description');
const itemAmount = document.querySelector('.amount');
const incomeBox = document.querySelector('.income-box');
const select = document.querySelector('#selection');


function checkSelection (){
    let selectedValue = select.options[select.selectedIndex].value;
    console.log(select.options);
    
    if(selectedValue == 'income'){
        console.log('income');
    }
    
    else if(selectedValue == 'expense'){
        console.log('expense');
    }
    else{
        console.log('select either income or expense');
        
    }
}

checkSelection();
function createContent (){

    return ``
    

}

function checkBalance () {


}


// action listener 

// if (income is selected){

// }

// if(expense is selected ){
    
// }