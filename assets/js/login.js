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