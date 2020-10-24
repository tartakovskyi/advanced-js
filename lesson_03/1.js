
/*  Начальные 3 цифры в каждом номере - это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

const regExp = /\(?(\d{3})\)?-?\s?(\d{3})-?(\d{4})/g
const newFormat = '($1) $2 $3'

console.log(st.replace(regExp,newFormat))





