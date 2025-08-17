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
        
    limparCampo()
}

function limparCampo() {
    nomeDoAmigo = document.getElementById('amigo');
    nomeDoAmigo.value = '';
}

console.log(amigos);