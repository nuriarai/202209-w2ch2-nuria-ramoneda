const strictEquals = (value1, value2) => {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return false;
  }

  if (Object.is(0, value1) && Object.is(-0, value2)) {
    return true;
  }

  if (Object.is(-0, value1) && Object.is(0, value2)) {
    return true;
  }

  return Object.is(value1, value2);
};

export default strictEquals;
