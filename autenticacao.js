document.getElementById("toggleSenha").addEventListener("click", function () {
    const senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    alert(`Login com nome: ${nome} e Senha: ${senha}`);
});
