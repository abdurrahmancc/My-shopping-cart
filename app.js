function updateCaseNumber(product, isIncreasing, price){
    const caseInput = document.getElementById(product + "-number");
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber>0){
        caseNumber = parseInt(caseNumber)-1;
    }
    caseInput.value = caseNumber;

    // case Total price
    const caseTotal = document.getElementById(product + "-Total");
    caseTotal.innerText = caseNumber * price;

    // calculete Total
    calculeteTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculeteTotal(){
    const phoneTotal = getInputValue("phone")*1000;
    const casetotals = getInputValue("case")*50;
    const subTotal = phoneTotal + casetotals;
    const taxTotal = subTotal / 10;

    // update on total 
    document.getElementById("sub-total").innerText= subTotal;
    document.getElementById("tax-amount").innerText= taxTotal;
    document.getElementById("total").innerText= subTotal + taxTotal;


}

//phone section
document.getElementById("phone-plus").addEventListener("click", function(){
    updateCaseNumber("phone", true, 1000);
})
document.getElementById("phone-minus").addEventListener("click", function(){
    updateCaseNumber("phone", false, 1000)
})


//phone section
document.getElementById("case-plus").addEventListener("click", function(){
    updateCaseNumber("case", true, 50);
})
document.getElementById("case-minus").addEventListener("click", function(){
    updateCaseNumber("case", false, 50);
})