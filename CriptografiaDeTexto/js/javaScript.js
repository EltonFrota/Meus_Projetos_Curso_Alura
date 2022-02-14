
/*
function criptografia() { // Abre a função Criptografia
   //essa var recebe o que foi escrito dentro da label  

   var capturaInput = document.getElementById("texto").value;
   criptografa = capturaInput;

   
   var mapObj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat"
   };

   armazenaCriptografia = armazenaCriptografia.replace(/e|i|a|o|u/gi, function (matched) {
      return mapObj[matched]

   });

   armazenaMsg(armazenaCriptografia);

}// Fecha a função Criptografia


function descriptografia() { // Abre a função otaoDescriptografia
   var capturaInput = document.getElementById("texto").value;
   var descriptografa = capturaInput;

   var armazenaDescriptografia = descriptografa;
   var mapObj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u"
   };

   armazenaDescriptografia = armazenaDescriptografia.replace(/enter|imes|ai|ober|ufat/gi, function (matched) {
      return mapObj[matched]
   });

   armazenaMsg(armazenaDescriptografia);

} //fechamento da função botaoDescriptografia


function armazenaMsg(armazenatxt) {
   var msg = document.getElementById("textoPraCript");
   msg.innerHTML = (armazenatxt);
}

function copiarTexto() { // Inicio do função Copiar Texto
   let textoCopiado = document.getElementById("textoPraCript");
   textoCopiado.select();
   textoCopiado.setSelectionRange(0, 99999)
   document.execCommand("copy");

   // cria uma mensagem de copiado
   Swal.fire(
      'Copiado com sucesso!',
      "Obrigado !",
      "success"
   )
} // Fim do função Copiar Texto

btncripto.addEventListener("click", botaodescriptografia);
*/
var segredos = [5,7,10,2];

var input = document.querySelector("textarea");
input.focus();

var contador = 0;
function verifica() {
   for(var posicao; contador < segredos.length; contador++) {
      if(input.value == segredos[posicao]) {
         alert("Você ACERTOU!");
      } 
   }
}
var botao = document.querySelector("input");
botao.onclick = verifica;