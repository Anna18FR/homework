//1.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран

// let arr =  [1, 2, 3, 4, 5];
// for(let i = 1; i < arr.length; i++){
//    document.write(i, '<br/>');
// }

// 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
// быть положительными и отрицательными. Выведите на экран только отрицательные 
// числа, которые больше -10, но меньше -3.

// let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i <= arr.length; i++){
//     if((arr[i] < -3) && (arr[i] > -10)){
//     document.write(arr[i], '<br/>');
//     }  
// }

// 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
// массива. Запишите ее в переменную result и выведите.

// const arr=[];
// let i = 23;
// while (i <= 57) {
//     arr.push(i)
//     i++;
// }
// console.log(arr)

// const arr2=[];
// let sum = 0;
// for(let j=23; j<=57;j++) {
//     arr2.push(j)
//     sum += j
// }
// console.log(arr2)
// console.log(sum)


// 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// const arr = ['10','20','30','50','235','3000'];
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//         console.log(num);
//     }
// }

// 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
// дни недели, а выходные дни выведите жирным.

// const arr= ['ПН ', 'ВТ ','СР ','ЧТ ','ПТ ','СБ ','ВС'];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] == 'СБ ' || arr[i] == 'ВС'){
//        document.write('<b>' + arr[i] + '</b>')
//    } else{
//        document.write(arr[i]);
//    }
// }

// 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
// и получите последний элемент массива, используя свойство length.

// const arr = [22, 11, 33, 55, 77];
// arr[5] = '44';
// arr[6] = arr.length;
// console.log(arr);

// 7. Запросите у пользователя по очереди числовые значения при помощи prompt и 
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое 
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел 
// массива, и выведите его на экран.

// let arr8 = [];
// alert('введите элементы массива');
// while(true) {
// let n = prompt('ввод данных');
// if (n === '') break;
// arr8.push(+n)
// }

// console.log('исходный массив',arr8);
// console.log('сортировка',arr8.sort());

// 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
// используя цикл while и метод reverse.

// const arr = [12, false, 'Текст', 4, 2, -5, 0];

// arr.reverse();
// console.log(arr);

// let i = arr.length;
// while(i >= 0) {
//     i--;
//     console.log(arr[i]);
// }

// 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном 
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

// const arr = [5, 9, 21, , , 9, 78, , , , 6];
// let summ = 0;
// for(let n = 0; n < arr.length; n++){
//     if(arr[n] == null){
//         summ++;
//     }
// }
// console.log(summ)

// 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями 
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть 
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или 
// [1,8,0,13,76,8,7,0,22,0,2,3,2].

// let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
// let first = null;
// let second = null;
// let summ = 0;

// for(let i=0; i<arr.length; i++) {
//     if (arr[i] == 0) {
//         if (first == null){
//             first = i;
//         } else {
//             second = i;
//         }
//     }
// }

// if (second != null) {
//     for(let j = first; j <= second; j++) {
//         summ = summ + +arr[j];
//     }
// }
// console.log(summ)

// 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает 
// пользователь

