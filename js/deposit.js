/* 
1. add event handler to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit to a number type
3. clear the deposit input field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6. get current balance total
7.calculate the new balance and set it to the new balance total



 */

// step-1:

document.getElementById('btn-deposit').addEventListener
    ('click', function () {
        // step-2:

        const depositField = document.getElementById('deposit-field');
        const newDepositAmountString = depositField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);

        // step 3: 
        depositField.value = '';

        // step-4: 
        const depositTotalElement = document.getElementById('deposit-total');
        const previousDepositTotalElementString = depositTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalElementString);

        // step-5: 
        const newDepositTotal = previousDepositTotal + newDepositAmount;

        depositTotalElement.innerText = newDepositTotal;

        // step-6:
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

        // step-7:
        const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
        balanceTotalElement.innerText = newBalanceTotal;




    })