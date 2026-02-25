var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com" // Виправив синтаксис тут
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Цей не має пройти
    },
];

// Створюємо регулярний вираз (шаблон для перевірки)
// Розбір шаблону по частинах:
// ^                       -> початок рядка
// [a-zA-Z0-9]+            -> перше слово (тільки букви та цифри)
// (\.[a-zA-Z0-9]+)?       -> (необов'язково) крапка та друге слово
// @                       -> символ собачки
// (gmail\.com|yahoo\.com) -> тільки gmail.com АБО (|) yahoo.com
// $                       -> кінець рядка

var emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

// Масив для збереження правильних адрес
var trustedEmails = [];

// Проходимо циклом по всіх користувачах
for (var i = 0; i < arr.length; i++) {
    
    // Беремо email поточного користувача
    var currentEmail = arr[i].email;

    // Метод .test() перевіряє, чи підходить email під наш шаблон
    if (emailPattern.test(currentEmail)) {
        // Якщо підходить (true) — додаємо в новий масив
        trustedEmails.push(currentEmail);
    }
}

// Виводимо результат
console.log("Перевірені адреси:", trustedEmails);