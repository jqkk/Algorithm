export default function primeFactors(n) {
  let nn = n;

  const factors = [];

  for (let factor = 2; factor <= Math.sqrt(nn); factor++) {
    while (nn % factor === 0) {
      nn /= factor;
      factors.push(factor);
    }
  }

  if (nn !== 1) {
    factors.push(nn);
  }

  return factors;
}
