export default function fibonacci(n) {
  const fiboSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n == 1) {
    return fiboSequence;
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fiboSequence.push(currentValue);

    iterationsCounter -= 1;
  }

  return fiboSequence;
}
