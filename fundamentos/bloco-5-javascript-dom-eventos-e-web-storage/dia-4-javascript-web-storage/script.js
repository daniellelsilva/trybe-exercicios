window.onload = function () {
    // 01 - Escolha do fundo de tela
        // chamar a sessão do botão/lista que muda a cor
        let fundoTela = document.querySelector('select');
        // adicionar o "ouvinte" addEvent. Body tem esse atalho.Select. selectedOPtions é uma coleção HTML, uma lista/"array" com vários elementos, ele possui a opção valor, mesma que usamos na pagina html pra criar o select.
        fundoTela.addEventListener('change', function (){
            let selected = fundoTela.selectedOptions[0];
            document.body.style.backgroundColor = selected.value;
            localStorage.setItem('5.4-muda-cor-do-fundo', selected.value);
        })
        
}
    // 02 -  Cor do texto
    // chamar o botão/lista que muda a cor da fonte
    let corDaLetra = document.querySelector('#corLetra');
    let texto = document.querySelector('#texto');
    // adiconar o evento ouvinte e a função
    corDaLetra.addEventListener('change', function(){
        let retornaCor = corDaLetra.selectedOptions[0];
        texto.style.color = retornaCor.value;
        localStorage.setItem('5.4-muda-cor-da-fonte', retornaCor.value)
    })

    // 03 - Escolher o tamanho da fonte 
        // botão para escolher tamanho da fonte e let que direciona a ele
        let tamanhoFonte = document.querySelector('#font-size');
        // adicionar ouvinte para quando o numero sofrer MUDANÇA
        tamanhoFonte.addEventListener('change', function(){
        texto.style.fontSize = `${tamanhoFonte.value}px`;
        localStorage.setItem('5.4-muda-tamanho-fonte', `${tamanhoFonte.value}px`);
        })
        // o valor tem que ser em px (cria string) para isso, usa o `${variavel}` ela facilita para usar a variavel dentro de uma string!


    
    // 04 - Espaçamento entre as linhas
        // fazer caminho para o botão
        let espacamentoLinhas = document.querySelector('#line-height');
        // fazer evento "ouvinte" quando o espaçamento sofrer mudança
        espacamentoLinhas.addEventListener('change', function(){
            texto.style.lineHeight = espacamentoLinhas.value;
        // salvar as preferencias, o setItem salva o valor! getItem CHAMA o valor
        localStorage.setItem('5.4-muda-espacamento-linhas', espacamentoLinhas.value);
        })


    // 05 - Tipo de fonte (font family)
        // chamar o botão
        let mudaFonte = document.getElementById('font-family');
        
        mudaFonte.addEventListener('change', function(){
            let retornaFonte = mudaFonte.selectedOptions[0];
            texto.style.fontFamily = retornaFonte.value;
            localStorage.setItem('5.4-muda-fonte', retornaFonte.value)
        })
        
        

    // 06 -As preferencias devem ser salvas;
    let salvaBackgorund = localStorage.getItem('5.4-muda-cor-do-fundo');
    document.body.style.backgroundColor = salvaBackgorund;

    let salvaFontColor = localStorage.getItem('5.4-muda-cor-da-fonte');
    texto.style.color= salvaFontColor;

    let salvaFontSize = localStorage.getItem('5.4-muda-tamanho-fonte');
    texto.style.fontSize = salvaFontSize;

    let salvaLineHeight = localStorage.getItem('5.4-muda-espacamento-linhas');
    texto.style.lineHeight = salvaLineHeight;

    let salvaFontFamily = localStorage.getItem('5.4-muda-fonte');
    texto.style.fontFamily = salvaFontFamily;