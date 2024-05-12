const isLucky = (x) => {
  return x % 7 === 0 || (x.toString().includes('7'))
};

function solution(numOfLines) {
  for (let i = 1; i <= numOfLines; i++) {
    isLucky(i) ? console.log(`Lucky!`) : console.log(i);
  }
}
