let totalAmount = document.getElementById("total-amt")
let userAmount = document.getElementById("expense-amt")
const checkAmountButton = document.getElementById("check-amt")
const totalAmountButton = document.getElementById("total-amt-button")
const expenseTitle = document.getElementById("expense-title")
const errorMessage = document.getElementById("budget-error")
const expenseTitleError = document.getElementById("expense-title-error")
const expenseAmountError = document.getElementById("expense-amt-error")
const amount = document.getElementById("amount")
const expenditureValue = document.getElementById("expend-value")
const balanceValue = document.getElementById("balance-amt")
let tempAmount = 0

// Budget function
totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value
    if (tempAmount === "" || tempAmount < 0) {
        errorMessage.classList.remove("hide")
    }
    else {
        errorMessage.classList.add("hide")
        amount.innerHTML =tempAmount
        balanceValue.innerText = tempAmount - expenditureValue.innerText
        totalAmount.value = 0
    }
})

// Disable, edit and delete button function
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit")
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool 
    })
}

// Modify list elements
