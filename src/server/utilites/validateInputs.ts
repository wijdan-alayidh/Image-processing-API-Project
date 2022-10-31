// This function will use to check if the input values is same as expected or not
const validateInputIsNumber = (input: unknown): boolean => {
  const inputValue = Number(input);

  if (!isNaN(inputValue)) {
    return true;
  } else {
    return false;
  }
};

export default validateInputIsNumber;
