function eraser(arr) {
  if (!arr) return -1;

  // arr.forEach((value, index) => {
  //   if (value % 2 === 0) {
  //     arr[index] = 0;
  //   }
  // });

  // arr = arr.filter((value) => value % 2 !== 0); // this will remove the values, not overwrite them

  arr = arr.map((value) => {
    if (value % 2 === 0) {
      return 0;
    } else {
      return value;
    }
  });

  return arr;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];

let newArray = eraser(array);

console.log(newArray);
