function verificaPalindromo(palavra){
    let arrayLetras = palavra.split('');
    let arrayReversa = arrayLetras.reverse();
    var juntaElementos = arrayReversa.join('');
    
    if (palavra === juntaElementos){
        return true;
    } else {
        return false;
    }
    
   
}
console.log(verificaPalindromo('hannah'));