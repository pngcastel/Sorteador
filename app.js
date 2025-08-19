let amigos = []; // array para adicionar o nome para sorteio


function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo');

    // se o espaço estiver em branco exibe um aleta
    if (nomeDoAmigo.value.trim() == '') {
        alert('Você precisa digitar um nome!');

    } else {
    // se não se o nome for adicionado duas vezes exibe um alerta
    if (amigos.includes(nomeDoAmigo.value.trim()) == true) {
        alert('Este nome já foi adicionado.')
        } else {
            // se não, se estiver tudo certo, adicionamos o nome na array com o push
            amigos.push(nomeDoAmigo.value.trim());
            console.log(amigos);
        }
    }
    listaDeAmigos()    
    limparCampo()
}

function listaDeAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ''; // limpamos a lista 

    for (let i = 0; i < amigos.length; i++) {
       let li = document.createElement('li'); // criamos no HTML a tag <li> para receber os nomes da array
        li.textContent = amigos[i];
        lista.appendChild(li); // usamos a tag para colocar o <li> dentro do <ul>
    }
}

function sortearAmigo() {
    if (amigos.length === 0){
        document.getElementById('resultado').innerHTML = 'A lista de amigos está vazia.';
        return // se a lista estiver vazia retornamos o texto acima
    } 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // sorteamos o nome aleatorio
    let nomeSorteado = amigos[indiceAleatorio]; // guardamos em uma var
    document.getElementById("resultado").innerHTML = "O amigo sorteado é: " + nomeSorteado; // e finalmente exibimos na tela
}


function limparCampo() {
    nomeDoAmigo = document.getElementById('amigo');
    nomeDoAmigo.value = '';
} // função para limpar o campo de texto