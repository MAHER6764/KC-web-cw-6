

//جافاسكربت ليست جافا

alert('مرحباً بك في موقعي الذي سيحسب درجتك!!')

let grade = prompt("اكتب درجتك بالأرقام");
console.log(grade);

if (grade > 89) {
    
    console.log('لقد حصلت على امتياز 🥳')
}

if (grade > 79) {
    
    console.log('لقد حصلت على جيد جداً🤩')
} 

if (grade > 69) {
    
    console.log('لقد حصلت على جيد🙂') 
}

if (grade > 59) {

    console.log('لقد حصلت على مقبول😕')
}

if (grade >= 50) {

    console.log('لقد حصلت على ضعيف☹️')
}

if (grade < 50) {

    console.log('راسب💔')
}

