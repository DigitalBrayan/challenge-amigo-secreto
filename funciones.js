let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();
  if (!nombreAmigo) return alert("Por favor, inserte un nombre.");
  

  amigos.push(nombreAmigo);
  actualizarListaAmigos();
  document.getElementById("amigo").value = "";
}

function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
  if (amigos.length === 0) return alert("No hay amigos en la lista para sortear.");
  
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}
    