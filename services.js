var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Додаємо нову послугу, як в дз
services['Розбити скло'] = "200 грн";

// 1. Метод для підрахунку загальної суми
services.price = function() {
    let total = 0;

    // Перебираємо всі ключі в нашому об'єкті (стрижка, гоління...)
    for (let key in this) {
        // Перевіряємо: нам потрібні тільки рядки (ціни), а не самі функції-методи
        if (typeof this[key] === 'string') {
            // parseInt("60 грн") перетворить це на число 60, відкинувши "грн"
            let value = parseInt(this[key]);
            total = total + value;
        }
    }
    return total; // Повертаємо суму
};

// 2. Метод для пошуку мінімальної ціни
services.minPrice = function() {
    let min = Infinity; // Спочатку беремо "нескінченність", щоб перше ж число було меншим

    for (let key in this) {
        if (typeof this[key] === 'string') {
            let value = parseInt(this[key]);
            // Якщо знайдена ціна менша за поточний мінімум — запам'ятовуємо її
            if (value < min) {
                min = value;
            }
        }
    }
    return min;
};

// 3. Метод для пошуку максимальної ціни
services.maxPrice = function() {
    let max = 0; // Починаємо з нуля

    for (let key in this) {
        if (typeof this[key] === 'string') {
            let value = parseInt(this[key]);
            // Якщо ціна більша за поточний максимум — запам'ятовуємо її
            if (value > max) {
                max = value;
            }
        }
    }
    return max;
};

// --- Перевірка роботи ---
console.log("Загальна вартість: " + services.price() + " грн"); // Має бути 440
console.log("Мінімальна ціна: " + services.minPrice() + " грн"); // Має бути 60
console.log("Максимальна ціна: " + services.maxPrice() + " грн"); // Має бути 200