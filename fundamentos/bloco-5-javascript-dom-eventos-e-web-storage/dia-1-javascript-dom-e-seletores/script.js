/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
 01- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 02- Crie uma função que mude a cor do quadrado vermelho para branco.
 03- Crie uma função que corrija o texto da tag <h1>.
 04- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 05- Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

//  01- Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaTexto(){
    let mudaParagarfo = document.getElementsByTagName('p')[1];
    mudaParagarfo.innerText = 'contratada em um bom emprego'
};
mudaTexto();

// 02- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudarCorQuadradoAmarelo() {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
};
mudarCorQuadradoAmarelo();

// 03- Crie uma função que corrija o texto da tag <h1>.
function corrigeTexto() {
    document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
};
corrigeTexto();

// 04- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function tagUpperCase() {
    document.getElementsByClassName('center-content')[0].style.textTransform = 'uppercase';
};
tagUpperCase();

// 05- Crie uma função que exiba o conteúdo de todas as tags <p> no console.