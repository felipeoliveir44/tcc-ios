$('#btn-login').click(function () {
    let notificacaoLogin = document.querySelector(".popup-login");
    let notificacaoLoginTexto = document.querySelector(".popup-login p");
    let notificacaoErro = document.querySelector(".popup-erro");
    let emailLogin = document.getElementById("emailLogin").value;
    let senhaLogin = document.getElementById("senhaLogin").value;
    const nomeLocal = localStorage.getItem("nome");
    const emailLocal = localStorage.getItem("email");
    const senhaLocal = localStorage.getItem("senha");

    if (emailLogin === emailLocal && senhaLogin === senhaLocal) {
        notificacaoLogin.style.display = "block";
        notificacaoLoginTexto.textContent = `Bem-vindo, ${nomeLocal} 👋`;
        // Redireciona para a página restrita
        setInterval(function () {
            window.location.href = "streaming.html";
        }, 5000);
    } else {
        notificacaoErro.style.display = "block";
        setTimeout(function () {
            notificacaoErro.style.display = "none"; // Esconder a mensagem de erro após 2 segundos
        }, 4500);
    }
});