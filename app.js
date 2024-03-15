function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //criamos as variáveis recuperando o valor digitado no input atraves o id delas no documento html
    //utilizando o .value, pegamos o VALOR que foi digitado
    //utilizando o parseint, nos garantimos que só poderemos receber valores INTEIROS

    if (de >= ate){
        //verificando se o ponto inicial é menor que o ponto final
        alert('O campo "De número" deve ser INFERIOR ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)){
        //verificando se o intervalo é maior ou igual a quantidade de numeros desejados
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        //loop para gerar a quantidade de numeros desejada
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero))
        //garantir que não ha numeros repetidos no nosso array
        {
            numero = obterNumeroAleatorio(de, ate);  
        }
        sorteados.push(numero);
        //adicionar elemento no nosso array
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    //aqui, modificamos o texto HTML para mostrar os numeros sorteados

    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //sorteando um numero inteiro entre o max e o min definidos pelo usuario

}

function alterarStatusBotao(){
    //aqui alteramos o status do botao, caso ele esteja desabilitado, iremos habilitar. e vice e versa.
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    //reiniciando o jogo
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}