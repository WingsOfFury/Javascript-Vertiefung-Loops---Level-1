/*
Deklariere ein Array names mit den Werten: "Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio".

Dann verwende eine for Schleife, um alle Namen in der Konsole anzuzeigen.
Hinweis: for-Schleife, Bedingung; Inkrement;

PS: Auf der Vorschau sind noch andere Namen, bitte nicht irritieren lassen :P
*/


const names = ["Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio"];

for (let i = 0; i < names.length; i = i + 1) {
    const fruit = names[i];
    console.log(i, fruit);
}
