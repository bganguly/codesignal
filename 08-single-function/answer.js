function solution(n) {
  const firstDigit = Math.floor(n / 10);
  const secondDigit = n % 10;
  return firstDigit + secondDigit;
}
