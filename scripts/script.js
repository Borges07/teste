function limparCPF(cpf) {
    return cpf.replace(/\D/g, '');  
}


function validarCPF(cpf) {
    cpf = limparCPF(cpf);
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;  
    }

    let soma = 0;
    let resto;

    
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;

    
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

document.getElementById('cpf').addEventListener('input', function() {
    const cpf = document.getElementById('cpf').value;
    const cpfLimpo = limparCPF(cpf);  

    const usuarioPreCadastrado = {
        cpf: '71051463114',  
        nome: 'Matheus borges Neves',
        email: 'matheusborgesneves07@gmail.com',
        senha: '70502604'
    };

    
    if (cpfLimpo.length === 11) {
        if (validarCPF(cpfLimpo)) {
            document.getElementById('cpfErro').textContent = "";

            
            if (cpfLimpo === usuarioPreCadastrado.cpf) {
                document.getElementById('nome').value = usuarioPreCadastrado.nome;
                document.getElementById('email').value = usuarioPreCadastrado.email;
                document.getElementById('senha').value = usuarioPreCadastrado.senha;
                document.getElementById('submitBtn').disabled = false; 
            } else {
                document.getElementById('nome').value = '';
                document.getElementById('email').value = '';
                document.getElementById('senha').value = '';
                document.getElementById('submitBtn').disabled = true;
                document.getElementById('cpfErro').textContent = "Usuário não encontrado!";
            }
        } else {
            document.getElementById('cpfErro').textContent = "CPF inválido!";
            document.getElementById('submitBtn').disabled = true;
        }
    } else {
        document.getElementById('cpfErro').textContent = "";
        document.getElementById('submitBtn').disabled = true;
    }
});

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert("Formulário enviado com sucesso!");
    document.querySelector('.Deubom').innerHTML = "Formulário enviado para " + document.getElementById('nome').value;
});
