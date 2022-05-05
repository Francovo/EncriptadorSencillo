let Data;
let Result;

const GetDataSubmit = () => {
  Data = document.querySelector("#input1").value;
  console.log(Data);
  Data.slice(4)
  Result = Data.replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  console.log(Result);
};
