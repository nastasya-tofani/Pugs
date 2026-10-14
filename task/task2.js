function calc() {
    console.log("x, y, z");
    let x = parseFloat(elementX.value);
    let y = parseFloat(elementY.value);
    let z = parseFloat(elementZ.value);
    console.log(x, y, z);

    // Проверка числа положительные
    if (x <= 0 || y <= 0 || z <= 0 || isNaN(x) || isNaN(y) || isNaN(z)) {
        result = "Ошибка: стороны должны быть положительными числами";
        check = false;
    } 
    // Tеравенства треугольника
    else if (x + y > z && x + z > y && y + z > x) {
        
        let sides = [x, y, z].sort((a, b) => a - b); 
        
        let a = sides[0]; // первый катет
        let b = sides[1]; // второй катет
        let c = sides[2]; // гипотенуза 
        
        // a² + b² = c²
        if (a * a + b * b === c * c) {
            result = "Треугольник существует; прямоугольный";
        } else {
            result = "Треугольник существует; не прямоугольный";
        }
        check = true;
        
    } else {
        result = "Треугольник с такими сторонами не существует";
        check = false;
    }
    
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Треугольник не существует или данфе неверныеф.");
    }
}

let result;
let check;

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");
const elementZ = document.getElementById("z");

const elementCalc = document.getElementById("calc");
elementCalc.addEventListener('click', calc);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
