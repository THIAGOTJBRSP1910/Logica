/**
 * Estudo do lado for - Tabuada completa
 * @author Thiago
 */

 

 for (let i = 1; i < 21; i++){
     document.write("<p>Tabuada do " + i + "</p>")
     for (let j = 1; j < 21; j++){
         document.write(i + " x " + j + "=" + (i * j) + "<br>")
     }
 }