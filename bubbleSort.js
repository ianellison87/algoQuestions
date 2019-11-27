function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        sorted = false;
      }

    }
  }

  return array
}

function swap(i, j, array) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}