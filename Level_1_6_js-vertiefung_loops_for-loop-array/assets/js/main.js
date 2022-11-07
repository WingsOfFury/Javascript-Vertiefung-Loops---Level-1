/*
Wir wollen ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg sollen ausgeben werden.
Deklariere die Variable retArray als leeres Array.
Schreibe eine for-Schleife.
Nutze den push() Befehl.
*/




let retArray = ["image_1.jpg"];

for (let i = 0; i < 99; i++) {
    retArray.push(`image_${i}.jpg`);


}

console.log(retArray);

