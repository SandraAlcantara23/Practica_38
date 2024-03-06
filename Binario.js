function binarySearch() {
  // Obtener la lista de números y el número a buscar desde los campos de entrada
  const numbersInput = document.getElementById('numbers').value;
  const targetInput = parseInt(document.getElementById('target').value);

  // Convertir la cadena de números a una matriz de enteros
  const numbers = numbersInput.split(',').map(num => parseInt(num.trim()));

  // Realizar la búsqueda binaria
  const result = performBinarySearch(numbers, targetInput);

  // Mostrar el resultado en la página
  const resultElement = document.getElementById('result');
  resultElement.textContent = Result: ${result};
}

function performBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
          return Found at index ${mid};
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return 'Not found';
}