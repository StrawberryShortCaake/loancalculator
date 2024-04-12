function calculateLoan(){
  LoanAmountValue = document.getElementById("loan-amount").value 
  

  interestRateValue = document.getElementById("interest-rate").value

  monthsToPayValue = document.getElementById("months-to-pay").value


  interest = (LoanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue


  monthlyPayment = (LoanAmountValue / monthsToPayValue + interest).toFixed(2)

  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}