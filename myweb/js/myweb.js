document.write('В чём сила?'); 
console.log('Сила — в правде.'); 
let phrasess = [';hello', 'ciao', 'салям', 'hei'];
let randIndex = Math.random(0,1);
console.log(randIndex);




let phrases = [
  'отправить другу смешную гифку',
  'посмотреть скидки на авиабилеты',
  'разобраться, о чём поют рэперы',
  'Юрий Дудь',
  'расставить книги на полке по цвету',
  'читать про зарплаты в Сан-Франциско'
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

phrase.textContent = getRandomElement(phrases);
button.addEventListener('click', function(){
  console.log('Счастье не за горами');
});