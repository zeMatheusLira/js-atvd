// Função MAIOR_MENOR
function maiorMenor() {
    let a = parseInt(document.getElementById('maiorMenorA').value);
    let b = parseInt(document.getElementById('maiorMenorB').value);
    let c = parseInt(document.getElementById('maiorMenorC').value);
    let d = parseInt(document.getElementById('maiorMenorD').value);
    let e = parseInt(document.getElementById('maiorMenorE').value);
    let valores = [a, b, c, d, e];
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    alert(`Maior valor: ${maior}\nMenor valor: ${menor}`);
}

// Função VOGAL
function vogal() {
    let c = document.getElementById('vogalChar').value.toLowerCase();
    if ('aeiou'.includes(c)) {
        alert('1 (Vogal)');
    } else {
        alert('0 (Não é vogal)');
    }
}

// Função LIMITES
function limites() {
    let li = parseInt(document.getElementById('limiteInferior').value);
    let ls = parseInt(document.getElementById('limiteSuperior').value);
    let soma = 0;
    let pares = [];

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }

    alert(`Números pares no intervalo: ${pares.join(', ')}\nSomatório: ${soma}`);
}

// Função ORDEM
function ordem() {
    let a = parseInt(document.getElementById('ordemA').value);
    let b = parseInt(document.getElementById('ordemB').value);
    let c = parseInt(document.getElementById('ordemC').value);
    let valores = [a, b, c];
    valores.sort((x, y) => x - y);
    alert(`Valores ordenados: ${valores.join(', ')}`);
}

// Função POSITIVO_NEGATIVO
function positivoNegativo() {
    let x = parseInt(document.getElementById('positivoNegativoX').value);
    if (x >= 0) {
        alert('Positivo (true)');
    } else {
        alert('Negativo (false)');
    }
}

// Função PAR_IMPAR
function parImpar() {
    let x = parseInt(document.getElementById('parImparX').value);
    if (x % 2 === 0) {
        alert('Par (true)');
    } else {
        alert('Ímpar (false)');
    }
}