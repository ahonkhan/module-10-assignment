const calculateDifference = (a, b) => {
  return a - b;
};

const isOdd = (num) => {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

const findMin = (array) => {
  let min = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
};

const filterEvenNumbers = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const sortArrayDescending = () => {
  let array = [5, 4, 1, 8, 2];
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
};

const lowercaseFirstLetter = (str) => {
  let newStr = str[0].toLocaleLowerCase();
  for (let i = 1; i < str.length; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
};

const countVowels = (str) => {
  let count = 0;
  const vowelsList = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (checkVowel(str[i].toLocaleLowerCase())) {
      count++;
    }
  }

  function checkVowel(char) {
    let found = false;
    for (let j = 0; j < vowelsList.length; j++) {
      if (char === vowelsList[j]) {
        found = true;
      }
    }

    return found;
  }

  return count;
};

const findAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};


