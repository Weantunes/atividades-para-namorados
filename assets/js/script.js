const lista = [
    'Cozinhar juntos',
    'Tirar fotos em dupla',
    'Fazer trabalho voluntário em uma ONG',
    'Fazer um piquenique ao ar livre',
    'Aproveitar a programação cultural online e gratuita',
    'Dar uma volta de bicicleta',
    'Sair para correr ou caminhar pelo bairro',
    'Sair para passear com o pet',
    'Assistir um filme juntos',
    'Assistir a séries debaixo das cobertas',
    'Ver o pôr do sol juntos',
    'Ver a lua e as estrelas em um gramado',
    'Dançar e cantar juntos na sala',
    'Ler juntos',
    'Jogos de tabuleiro ou de baralho',
    'Troca de massagem',
    'Acampar no quintal',
];

function ResultadoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    document.querySelector("#resultado").innerText = lista[indiceAleatorio];
    document.querySelector("#resultado").style.color = "white";
}

