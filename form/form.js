
let check = false;

function validateForm() {
    console.log("Начало проверки формы..."); 
    

    let phoneInput = document.getElementById("phone").value;
    let lastname = document.getElementById("lastname").value;

    let phone = parseFloat(phoneInput);

    if (phone <= 0 || isNaN(phone)) {
        document.getElementById("result").value = "Ошибка: некорректный телефон";
        check = false;
    } 
    else if (lastname === "") {
        document.getElementById("result").value = "Ошибка: заполните фамилию";
        check = false;
    } 
    else {
        document.getElementById("result").value = "Данные корректны! Можно отправлять.";
        check = true;
    }
}


function sendData() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Данные не проверены или содержат ошибку. Нажмите 'Проверить данные'.");
    }
}


const elementCheck = document.getElementById("checkForm");
elementCheck.addEventListener('click', validateForm);

const elementSend = document.getElementById("sendForm");
elementSend.addEventListener('click', sendData);
