function maxPossible(firstNum, secondNum) {
  let firstArray = String(firstNum).split("");

  let secondArray = String(secondNum)
    .split("")
    .sort((a, b) => b - a);
  for (let index = 0; index < firstArray.length; index++) {
    if (firstArray[index] < secondArray[0]) {
      firstArray[index] = secondArray.shift();
    }
  }

  return firstArray.join("");
}
console.log(maxPossible(523, 76));
