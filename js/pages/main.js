function enviarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }
  
  if(emailRegex.test(email) === false) {
    alert("Por favor, preencha o email corretamente.");
    return;
  }

  alert("Mensagem enviada com sucesso! Entrarei em contato em breve. 😊");
}
