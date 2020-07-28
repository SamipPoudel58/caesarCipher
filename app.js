const plainText = document.getElementById("plainInput");
const key = document.getElementById("key");
const cipherText = document.getElementById("cipherInput");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const alph = "abcdefghijklmnopqrstuvwxyz";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let text = "";

plainText.addEventListener("keyup", (e) => {
  let val = e.target.value;
  // console.log(val[0]);
  cipher(val);
  // for (let i = 0; i < val.length; i++) {
  //   let pos = alph.indexOf(val[i]);
  //   if (pos >= 0) {
  //     let num = pos + Number(key.value);
  //     text += alph[num % 26];
  //   } else {
  //     text += val[i];
  //   }
  // }
  // cipherText.value = text;
  // text = "";
});

plus.addEventListener("click", (e) => {
  key.value++;
  cipher(plainText.value);
  // for (let i = 0; i < plainText.value.length; i++) {
  //   let pos = alph.indexOf(plainText.value[i]);
  //   if (pos >= 0) {
  //     let num = pos + Number(key.value);
  //     text += alph[num % 26];
  //   } else {
  //     text += val[i];
  //   }
  // }
  // cipherText.value = text;
  // text = "";
});
minus.addEventListener("click", (e) => {
  key.value--;
  cipher(plainText.value);
});

function cipher(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      let pos = capital.indexOf(string[i]);
      if (pos >= 0) {
        let keys =
          Number(key.value) >= 0
            ? Number(key.value)
            : capital.length + Number(key.value);
        let num = pos + keys;
        text += capital[num % 26];
      } else {
        text += string[i];
      }
    } else {
      let pos = alph.indexOf(string[i]);
      if (pos >= 0) {
        let keys =
          Number(key.value) >= 0
            ? Number(key.value)
            : alph.length + Number(key.value);
        let num = pos + keys;
        text += alph[num % 26];
      } else {
        text += string[i];
      }
    }
    // let pos = alph.indexOf(string[i]);
    // if (pos >= 0) {
    //   let keys =
    //     Number(key.value) >= 0
    //       ? Number(key.value)
    //       : alph.length + Number(key.value);
    //   let num = pos + keys;
    //   text += alph[num % 26];
    // } else {
    //   text += string[i];
    // }
  }
  cipherText.value = text;
  text = "";
}
