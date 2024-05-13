const left_shift_button = document.getElementsByClassName("left-shift-button")[0];
const boxesColl = document.getElementsByClassName("box");
const right_shift_button = document.getElementsByClassName("right-shift-button")[0];

const boxesHtmlArray = Array.from(boxesColl);
const numbersArray = boxesHtmlArray.map(box => box.innerHTML);

left_shift_button.onclick = () => {
  numbersArray.push(numbersArray.shift());
  boxesHtmlArray.forEach((box, ind) => box.innerHTML = numbersArray[ind]);
}

right_shift_button.onclick = () => {
  numbersArray.unshift(numbersArray.pop());
  boxesHtmlArray.forEach((box, ind) => box.innerHTML = numbersArray[ind]);
}