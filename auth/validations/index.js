function registerValidation(data) {
  if (!data.name) {
    return "Name is required";
  }

  if (data.name.length < 3) {
    return "Name must be at least 3 characters long";
  }

  if (!data.email) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return "Email is not valid";
  }

  if (!data.password) {
    return "Password is required";
  }

  if (data.password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  return null;
}

function loginValidation(data) {
  if (!data.email) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return "Email is not valid";
  }

  if (!data.password) {
    return "Password is required";
  }

  if (data.password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  return null;
}

module.exports = {
  registerValidation,
  loginValidation,
};
