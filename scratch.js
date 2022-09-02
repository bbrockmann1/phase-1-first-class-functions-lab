// const numbers = [1, 2, 3, 4];

// const arrayslicer9k = () => {
//     console.log(numbers.slice(-2));
// };

// arrayslicer9k();

function multiplyBy(num1) {
    return function (num2) {
      return num1 * num2;
    };
  };

const multiplyByThree = multiplyBy(3);
const multiplyByFive = multiplyBy(5);

multipyByThree(10);
multiplyByFive(10);