function handleSubmit(event){
    event.preventDefault();
    let loanAmt = document.getElementById('loanAmt').value
    let currentAcc = document.getElementById('currentAcc').value 
    let loanErr = document.getElementById('loanErr')
    let currErr = document.getElementById('currErr')
    let creditHis = document.getElementById('creditHis').value
    let creditErr = document.getElementById('creditErr')
    let depositDate = document.getElementById('depositDate').value 
    let depositErr = document.getElementById('depositErr')
    let loanCol = document.getElementById('loanCol') 
    let colErr = document.getElementById('colErr')
    
    let repayLoan = document.getElementById('repayLoan')
    let repayErr = document.getElementById('repayErr')
    let accType = document.getElementById('accType')
    let typeErr = document.getElementById('typeErr')
    let awardLoan = document.getElementById('awardLoan')
    

    if(loanAmt){
        let point = 0
        let sum = 0
        let sem = 0
        let sam = 0
        let sim = 0
        let som = 0
        let sym = 0
    if(loanAmt == "" && currentAcc == ""){
        loanErr.textContent = "**this field can't be empty**"
        currErr.innerHTML = "**this field can't be empty**"
console.log("working")
    }else if(loanAmt > currentAcc){
       sum = point - 10
       console.log(sum)
    }else{
        sum = point + 10
        console.log(sum)
    }

    if(creditHis == ''){
        creditErr.innerHTML = "**this field can't be empty**"
    }else if(creditHis  == "yes"){
       sim = point + 10
       console.log(sim)
    }else{
        sim = point
        console.log(sim)
    }

    if(depositDate == ''){
        depositErr.innerHTML = "**this field can't be empty**"
    }else if(depositDate >=1 || depositDate <= 31){
        sem = point + 5
       console.log(sem)
    }else{
        sem = point
        console.log(sem)
    }

    if(loanCol.value == ''){
        colErr.innerHTML = '**please select an option**'
    }else if(loanCol.value >= 6){
        colErr.innerHTML = ""
        sam = point + 10 
       console.log(sam)
    }else{
        colErr.innerHTML = ""
        sam = point
        console.log(sam)
    }

    if(repayLoan.value == ''){
        repayErr.innerHTML = '**please select an option**'
    }else if(repayLoan.value <= 6){
        repayErr.innerHTML = ""
        som = point + 5 
       console.log(som)
    }else{
        repayErr.innerHTML = ""
        som = point
        console.log(som)
    }
    

    if(accType.value === ''){
        typeErr.innerHTML = '**please select an option**'
    }else if(accType.value == "current" ){
        typeErr.innerHTML = ""
        sym = point + 10
       console.log(sym)
    }else if(accType.value == "savings"){
        sym = point + 5
        console.log(sym)
    }else{
      typeErr.innerHTML = ""
        sym = point
        console.log(sym)
    }
    


 let total = sum + sim + sem + sam + som + sym
 console.log(total)
    if(total >= 30){
        awardLoan.innerHTML = "Loan Request Verified!"
    }else{
        awardLoan.innerHTML = "Not Eligible"
    }
}
}