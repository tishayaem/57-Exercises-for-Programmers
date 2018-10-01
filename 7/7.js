(function promptAndAlert() {
  let length = prompt('What is the length of the room in feet');
  let width = prompt('What is the width of the room in feet');
  alert(`You entered dimesions of ${length} feet by ${width} feet`);
  alert(
    `The area is \n ${length * width} square feet \n ${squareMeter(
      length,
      width
    )} square meters `
  );
})();

function squareMeter(length, width) {
  const convertionFactor = 0.09290304;
  return Number((length * width * convertionFactor).toFixed(3));
}
module.exports = squareMeter;
