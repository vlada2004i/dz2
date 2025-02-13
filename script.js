let age = parseInt(prompt("Введите ваш возраст:"));
if (age <= 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

const number = prompt("Введите число:");
if (number > 100) {
    console.log("Большое число");
} else if (number < 100) {
    console.log("Маленькое число");
} else {
    console.log("Точно 100!");
}


let login = prompt("Введите логин");
    let password = prompt("Введите пароль");

    if (login === "admin" && password === "12345") {
        alert("Добро пожаловать!");
      } else {
        alert("Неверный логин или пароль");
      }