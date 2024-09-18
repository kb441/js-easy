// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  // Проходимо по кожному символу рядка
  for (let i = 0; i < str.length; i++) {
    // Якщо символ є голосною, замінюємо на '*', інакше залишаємо його
    if (vowels.includes(str[i].toLowerCase())) {
      result += '*';
    } else {
      result += str[i];
    }
  }
  
  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;