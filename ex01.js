//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no formato de CPF (123.456.789-01) usando slice e concatenação.

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é número
    return cpf.slice(0, 3) + '.' +
           cpf.slice(3, 6) + '.' +
           cpf.slice(6, 9) + '-' +
           cpf.slice(9, 11);
  }
  
  console.log(formatarCPF('12345678901')); // Saída: 123.456.789-01