let inscritos = [];

function incluirInscrito() {
    let nome = document.getElementById('nome').value;
    let dataNasc = document.getElementById('dataNasc').value;
    let email = document.getElementById('email').value;

    // Verifica se é maior de 18 anos
    let dataNascArray = dataNasc.split('/');
    let dataNascFormatada = new Date(dataNascArray[2], dataNascArray[1] - 1, dataNascArray[0]);
    let idade = calcularIdade(dataNascFormatada);
    if (idade < 18) {
        alert('É necessário ter 18 anos ou mais para se inscrever.');
        return;
    }

    // Verifica se o email é válido usando uma expressão regular (RegEx)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('O email informado é inválido.');
        return;
    } else {
        alert("Teste");
    }

}