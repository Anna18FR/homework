// Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
// задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
// т.д.). Скрипт определение поры года написать через switch. 

let month_years = n % 12;
    month_year = Math.round(month_years);
    console.log('месяц года', month_year);

switch (month_year) {
case 1,2: 
    console.log ('зима');
    break;

case 3,4,5:  
    console.log ('весна');
    break;

case 6,7,8:  
    console.log ('лето');
    break;
   
case 9,10,11:  
    console.log ('осень');
    break;   

case 12: 
    console.log ('зима');
    break;

    System.out.println("Такого месяца нет ");
}