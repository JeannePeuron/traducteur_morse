// Etape 5

const textToMorse = document.querySelector(".text");
const morseToText = document.querySelector(".morse");
const buttonText = document.querySelector(".encode-btn");
const buttonMorse = document.querySelector(".decode-btn");
const translateEncode = document.querySelector(".translateEncode");
const translateDecode = document.querySelector(".translateDecode");

buttonText.addEventListener(`click`, () => {
  translateEncode.innerHTML = `
  <p> ${textToMorse.value} </p>
  <p> ${encode(textToMorse.value)}</p>`;
});

buttonMorse.addEventListener(`click`, () => {
  translateDecode.innerHTML = `
  <p> ${morseToText.value} </p>
  <p> ${decode(morseToText.value)}</p>`;
});

// Étape 1
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

// Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

function getLatinCharacterList(text) {
  return text.split("");
}

// Étape 2
// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

// Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

function translateLatinCharacter(character) {
  return latinToMorse[character.toUpperCase()];

  // Le toUpperCase permet de transformer les minuscules en majuscules.
}

// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

// function encode(text) {
//   const split = getLatinCharacterList(text);

//   const array = [];

//   for (let i = 0; i < split.length; i++) {

//     const character = split[i];

//     array.push(translateLatinCharacter(character));
//   }

//   return array.join(" ");
// }

// console.log(encode("Hello World"));

// OU ALORS COMME CA :

function encode(text) {
  const spliter = getLatinCharacterList(text);

  const morseList = spliter.map(
    (char) => translateLatinCharacter(char) || char
  );

  // le || char permet de garder le caractère inchangé s'il nest pas reconnu par la table.

  return morseList.join(" ");
  // le join permet de transformer le tableau en chaine de caractères.
}

// Étape 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};
// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

function getMorseCharacterList(morse) {
  const morseText = morse.split(" ");

  return morseText;
}

function translateMorseCharacter(character) {
  const translation = morseToLatin[character];

  return translation;
}

// function decode(morse) {
//   const arrayMorse = getMorseCharacterList(morse);

//   const translateMorse = arrayMorse.map(
//     (char) => translateMorseCharacter(char) || char
//   );

//   return translateMorse;
// }

// console.log(decode(".... . .-.. .-.. ---  .-- --- .-. .-.. -.. !"));

// OU COMME SUIT :

function decode(morse) {
  const arrayMorse = getMorseCharacterList(morse);
  const decodedArray = [];

  for (let i = 0; i < arrayMorse.length; i++) {
    const charMorse = arrayMorse[i];

    decodedArray.push(translateMorseCharacter(charMorse) || charMorse);
  }

  return decodedArray.join(" "); // on assemble en une chaîne
}

// Étape 5
// Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.
