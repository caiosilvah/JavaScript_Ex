//Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolosusando Math.random(), charCodeAt() e String.fromCharCode().

function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let senha = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[randomIndex];
    }
    return senha;
  }
  
  console.log(gerarSenha());