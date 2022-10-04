const strictEquals = (number1, number2) => {
  let result;
  if (Number.isNaN(number1) && Number.isNaN(number2)) {
    result = false;
    return `Result: ${number1} / ${number2} : ${result}`;
  }

  if (Object.is(0, number1) && Object.is(-0, number2)) {
    result = true;
    return `Result: ${number1} / ${number2} : ${result}`;
  }

  if (Object.is(-0, number1) && Object.is(0, number2)) {
    result = true;
    return `Result: ${number1} / ${number2} : ${result}`;
  }

  result = Object.is(number1, number2);
  return `Result: ${number1} / ${number2} : ${result}`;
};

export default strictEquals;
