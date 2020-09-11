const checkValidity = (value, rules) => {
  let isValid = true

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  return isValid
}

export default checkValidity