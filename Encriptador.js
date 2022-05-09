let Data;
let Result;

//Tomar data del input
const GetDataSubmit = () => {
  Data = document.querySelector("#input1").value;

  Result = Array.from(Data).map((char) => {
    if (char === "a") {
      return char.replace(char, `${char}i`);
    } else if (char === "e") {
      return char.replace(char, `${char}nter`);
    } else if (char === "i") {
      return char.replace(char, `${char}mes`);
    } else if (char === "o") {
      return char.replace(char, `${char}ber`);
    } else if (char === "u") {
      return char.replace(char, `${char}enter`);
    }
    return char;
  });
  let x = Result.join("");
  console.log(x);

  if (Data === "") {
    document.getElementById("CardBack").innerHTML = `
    <img class="Image" src="./images/Muñeco.svg" />
    <h3 style="word-break: break-all">Ningun mensaje fue encontrado</h3>
    <h6>Ingresa el texto que deseas encriptar o desencriptar</h6>
    <h1>Developed by Franco Velasco</h1>
    `;
  } else {
    document.getElementById("CardBack").innerHTML = `
    <h1 type='text' id='finaltext'>${x}</h1>
    <button class="BtnDesEncriptar" type="submit" onclick={Copiar()}
    >Copiar</button>
    `;
  }
};

//Desencriptar cuando data es real

const DesEncriptar = () => {
  Dato = Result;

  Resultado = Data.replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  console.log(Resultado);

  document.getElementById("CardBack").innerHTML = `
  <h1>${Resultado}</h1>
  `;
};

//Copiar
const Copiar = () => {
  let copy = document.getElementById("finaltext");
  copy.select();
  select.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(copy.value);

  /* Alert the copied text */
  alert("Copied the text: " + copy.value);
};
