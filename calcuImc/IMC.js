/**
 * Calculo da media
 * @autor Thiago de Jesus
 */

 function calcularIMC(){
     let Peso
     let Altura
     let media
     /*
        parseFloat converte a String da caixa de textodo formulario para um tipo numérico
        Float (numeros reais, casas decimais)
        int (numeros inteiros)
        .replace(",",".") (troca um caractere por outro)
     */
     Peso = parseFloat(frmMedia.txtPeso.value.replace(",","."))
     Altura = parseFloat(frmMedia.txtAltura.value.replace(",","."))
     media = Peso / (Altura * Altura)
     //toFixed(2) -> formatar o resultado em 2 casas decimais
     frmMedia.txtResultado.value = media.toFixed(2)

     if (media < 17)  {
         frmMedia.txtStatus.value = "Muito abaixo de Peso"
     }
     else if (media > 17 && media < 18,49) {
         frmMedia.txtStatus.value = "Abaixo do peso"
     } 
     else if (media > 18,50 && media < 24,99) {
         frmMedia.txtStatus.value = "Peso Normal"
     }
     else if (media > 25 && media < 29,99) {
         frmMedia.txtStatus.value = "Acima do Peso"
     }
     else if (media > 30 && media < 34,99) {
         frmMedia.txtStatus.value = "Obesidade 1"
     }
     else if (media > 35 && media < 39,99) {
         frmMedia.txtStatus.value = "Obesidade 2"
     }
     else if (media > 40){
         frmMedia.txtStatus.value = "Obesidade 3(Mórbida)"
     }
 }