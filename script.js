let age = parseInt(prompt("Введите ваш возраст:"));
if (age <= 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

let age = parseInt(prompt("Введите число"));
if (age > 65) {
    console.log("Большое число");
} 
if (age = 65) {
    console.log("Точно 100!");
}
else {
    console.log("Маленькое число");
}

let login = prompt("Введите логин");
    let password = prompt("Введите пароль");

    if (login === "admin" && password === "12345") {
        alert("Добро пожаловать!");
      } else {
        alert("Неверный логин или пароль");
      }