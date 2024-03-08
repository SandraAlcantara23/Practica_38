function sortNumbers() {
    var inputNumbers = document.getElementById('numbers').value;
    var order = document.getElementById('order').value;
    var numbers = inputNumbers.split(',').map(Number);

    if (order === 'asc') {
      quicksortAscending(numbers, 0, numbers.length - 1);
    } else if (order === 'desc') {
      quicksortDescending(numbers, 0, numbers.length - 1);
    }

    displayResult(numbers);
  }

  function quicksortAscending(arr, low, high) {
    if (low < high) {
      var pi = partitionAscending(arr, low, high);

      quicksortAscending(arr, low, pi - 1);
      quicksortAscending(arr, pi + 1, high);
    }
  }

  function quicksortDescending(arr, low, high) {
    if (low < high) {
      var pi = partitionDescending(arr, low, high);

      quicksortDescending(arr, low, pi - 1);
      quicksortDescending(arr, pi + 1, high);
    }
  }

  function partitionAscending(arr, low, high) {
    var pivot = arr[high];
    var i = low - 1;

    for (var j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }

    swap(arr, i + 1, high);
    return i + 1;
  }

  function partitionDescending(arr, low, high) {
    var pivot = arr[high];
    var i = low - 1;

    for (var j = low; j < high; j++) {
      if (arr[j] > pivot) {
        i++;
        swap(arr, i, j);
      }
    }

    swap(arr, i + 1, high);
    return i + 1;
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function displayResult(arr) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Resultado: ' + arr.join(', ');
  }