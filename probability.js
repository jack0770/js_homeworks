function checkProbabilityTheory(count) {
    // 1. Створюємо змінні-лічильники для парних та непарних чисел
    let evenNumbers = 0;
    let oddNumbers = 0;

    // 2. Запускаємо цикл, який крутиться 'count' разів
    for (let i = 0; i < count; i++) {
        
        // 3. Генеруємо число від 100 до 1000
        // Формула ось така наче: Math.floor(Math.random() * (max - min + 1)) + min
        // (1000 - 100 + 1) = 901
        let randomNumber = Math.floor(Math.random() * 901) + 100;

        // 4. Перевіряємо, чи число парне
        if (randomNumber % 2 === 0) {
            evenNumbers = evenNumbers + 1; // Рахуємо парні
        } else {
            oddNumbers = oddNumbers + 1;   // Рахуємо непарні
        }
    }

    // 5. Обчислюємо відсотки
    let evenPercent = (evenNumbers / count) * 100;
    let oddPercent = (oddNumbers / count) * 100;

    // 6. Виводимо результат у консоль- наче усе вырно виходить
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenNumbers);
    console.log("Не парних чисел: " + oddNumbers);
    console.log("Відсоток парних до не парних: " + evenPercent + "% / " + oddPercent + "%");
}

// Запускаємо функцію (наприклад, 1000 разів)
checkProbabilityTheory(1000);