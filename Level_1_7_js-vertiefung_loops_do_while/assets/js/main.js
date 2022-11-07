/*
Erstelle einen Loop mit do...while.
Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.
*/



let text = "";
let i = 0;

do {
    text += "<br>The number is " + i;
    i++;
  }
  while (i < 6); 

document.getElementById("output").innerHTML = text;

