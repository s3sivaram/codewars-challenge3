// ------------solved by s3sivaram----on 21-Jul-21
// sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function sortString(str) {
  let numberposition;
  let actualposition;
  let newarray = [];
  let words = str.split(" ");
  let result = " ";
  words.map((word) => {
    numberposition = word.search(/[0-9]/);
    actualposition = String(word).substr(numberposition, 1);
    if (numberposition >= 0) {
      newarray[actualposition - 1] = word;
    } else {
      newarray.unshift(word);
    }

    // console.log(numberposition, actualposition);
  });
  if (newarray.length > 0) {
    for (let i = 0; i <= newarray.length - 1; i++) {
      result = result + " " + newarray[i];
    }
  } else {
    result = "";
  }
  return result.trim();

  console.log(newarray);
}

let string = "is2 Thi1s T4est 3a";
console.log(sortString(string));
