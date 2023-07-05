$('#btn-enviar').click(function () {
    let nome = document.getElementById("nome").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById('senha').value;
    // Verifica se é maior de 18 anos
    let dataNascimento = new Date(dataNasc);
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    // Verifica se o email e senha é válido usando RegEx
    let emailRegex = /^\S+@\S+\.\S+$/;
    let senhaRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    let emailValido = emailRegex.test(email);
    let senhaValida = senhaRegex.test(senha);


    if (idade >= 18 && emailValido && senhaValida) {
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);
        $.notify("Cadastro realizado!", "success");
        window.location.href = "streaming.html";
    } else {
        $.notify("Cadastro não realizado! Tente novamente", "error");
    }
});

$('#btn-login').click(function () {
    
    let emailLogin = document.getElementById("emailLogin").value;
    let senhaLogin = document.getElementById("senhaLogin").value;
    const emailLocal = localStorage.getItem("email");
    const senhaLocal = localStorage.getItem("senha");

    if (emailLogin === emailLocal && senhaLogin === senhaLocal) {
        alert("Login bem-sucedido!");
        // Redireciona para a página restrita
        window.location.href = "streaming.html";
    } else {
        alert("Nome de usuário ou senha inválidos!");
    }
});