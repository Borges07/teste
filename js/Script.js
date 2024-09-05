document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    alert("Formulário enviado com sucesso!");

    
    sucessoTotal = getElementsByClassName('Deubom');

   sucessoTotal.innerHTML = "oi xe";
});
