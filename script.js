function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarNumero() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    let numeroAleatorio = getRandomNumber(min, max);
    document.getElementById("resultado").innerText = `Número sorteado: ${numeroAleatorio}`;
}