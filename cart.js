var removeCartItem = document.getElementById("remove-cart1");
removeCartItem.addEventListener("click", function() {
    const cartItem = document.getElementById("cartitem1")
    cartItem.style.display = "none";
})

var removeCartItem = document.getElementById("remove-cart2");
removeCartItem.addEventListener("click", function() {
    const cartItem = document.getElementById("cartitem2")
    cartItem.style.display = "none";
})

// plus btn event handler
plusBtn1.addEventListener("click", function() {
    const currentPhoneNumber = parseFloat(document.getElementById("numberOfPhone").value);
    const newPhoneNumber = currentPhoneNumber + 1;
    document.getElementById("numberOfPhone").value = newPhoneNumber;

    const phoneMoney = parseFloat(document.getElementById("phoneMoney").innerText);
    const newphoneMoney = phoneMoney + 1219;
    document.getElementById("phoneMoney").innerText = newphoneMoney;

    // subtotal
    const currentSpent = document.getElementById("currentSpent").innerText;
    const currentSpentNumber = parseFloat(currentSpent);
    const totalSpent = 1219 + currentSpentNumber;
    document.getElementById("currentSpent").innerText = totalSpent;

    // total
    const totalTax = parseFloat(document.getElementById("tax-added").innerText);
    const phoneTax = 100;
    document.getElementById("tax-added").innerText = totalTax + phoneTax;
})

// plus btn event handler
plusBtn2.addEventListener("click", function() {
    const currentCoverNumber = parseFloat(document.getElementById("numberOfCover").value);
    const newCoverNumber = currentCoverNumber + 1;
    document.getElementById("numberOfCover").value = newCoverNumber;

    const coverMoney = parseFloat(document.getElementById("coverMoney").innerText);
    const newCoverMoney = newCoverNumber * 59;
    document.getElementById("coverMoney").innerText = newCoverMoney;

    // subtotal
    const currentSpent = document.getElementById("currentSpent").innerText;
    const currentSpentNumber = parseFloat(currentSpent);
    const totalSpent = 59 + currentSpentNumber;
    document.getElementById("currentSpent").innerText = totalSpent;

    const totalTax = parseFloat(document.getElementById("tax-added").innerText);
    const phoneTax = 100;
    document.getElementById("tax-added").innerText = totalTax + phoneTax;

})

// minus btn event handler
minusBtn1.addEventListener("click", function() {
    const currentPhoneNumber = parseFloat(document.getElementById("numberOfPhone").value);
    if (currentPhoneNumber > 0) {
        const newPhoneNumber = currentPhoneNumber - 1;
        document.getElementById("numberOfPhone").value = newPhoneNumber;

        const phoneMoney = parseFloat(document.getElementById("phoneMoney").innerText);
        const newphoneMoney = newPhoneNumber * 1219;
        document.getElementById("phoneMoney").innerText = newphoneMoney;

        const currentSpent = document.getElementById("currentSpent").innerText;
        const currentSpentNumber = parseFloat(currentSpent);
        const totalSpent = currentSpentNumber - 1219;
        document.getElementById("currentSpent").innerText = totalSpent;

        const totalTax = parseFloat(document.getElementById("tax-added").innerText);
        const phoneTax = 100;
        document.getElementById("tax-added").innerText = totalTax - phoneTax;

    }
})

//   minus btn event handler
minusBtn2.addEventListener("click", function() {
    const currentCoverNumber = parseFloat(document.getElementById("numberOfCover").value);
    if (currentCoverNumber > 0) {
        const newCoverNumber = currentCoverNumber - 1;
        document.getElementById("numberOfCover").value = newCoverNumber;

        const coverMoney = parseFloat(document.getElementById("coverMoney").innerText);
        const newCoverMoney = newCoverNumber * 59;
        document.getElementById("coverMoney").innerText = newCoverMoney;

        const currentSpent = document.getElementById("currentSpent").innerText;
        const currentSpentNumber = parseFloat(currentSpent);
        const totalSpent = currentSpentNumber - 59;
        document.getElementById("currentSpent").innerText = totalSpent;
    }
})