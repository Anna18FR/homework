let n = prompt('введите число месяца', '');

if (n > 0 && n <= 10) document.write ('I декада');
if (n > 14 && n <= 20) document.write ('II декада');
if (n > 29 && n <= 31) document.write ('III декада');
