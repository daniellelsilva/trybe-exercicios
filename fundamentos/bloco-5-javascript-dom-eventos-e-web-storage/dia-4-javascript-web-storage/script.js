window.onload = function () {
    // 01 - Escolha do fundo de tela
        // chamar a sessão do botão/lista que muda a cor
        let select = document.querySelector('select');
        // adicionar o "ouvinte" addEvent. Body tem esse atalho.Select. selectedOPtions é uma coleção HTML, uma lista/"array" com vários elementos, ele possui a opção valor, mesma que usamos na pagina html pra criar o select.
        select.addEventListener('change', function (){
            let selected = select.selectedOptions[0];
            document.body.style.backgroundColor = selected.value
        })
        
}
    // 02 -  Cor do texto
    // chamar o botão/lista que muda a cor da fonte
    let corDaLetra = document.querySelector('#corLetra');
    let textoCor = document.querySelector('#texto');
    // adiconar o evento ouvinte e a função
    corDaLetra.addEventListener('change', function(){
        let retornaCor = corDaLetra.selectedOptions[0];
        textoCor.style.color = retornaCor.value;
    })

    // 03 - Escolher o tamanho da fonte 
        // botão para escolher tamanho da fonte e let que direciona a ele
        let tamanhoFonte = document.querySelector('#font-size');
        // adicionar ouvinte para quando o numero sofrer MUDANÇA
        tamanhoFonte.addEventListener('change', function(){
        textoCor.style.fontSize = `${tamanhoFonte.value}px`;
        })
        // o valor tem que ser em px (cria string) para isso, usa o `${variavel}` ela facilita para usar a variavel dentro de uma string!


    
    // 04 - Espaçamento entre as linhas

    // 05 - Tipo de fonte (font family)

    // 06 -As preferencias devem ser salvas;