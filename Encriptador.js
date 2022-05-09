let Data;
let Result;

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
    <h1>${x}</h1>
    `;
  }
};

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
