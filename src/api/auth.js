import axios from "axios";


const BASE_DOMAIN = "http://192.168.1.19:5000";

const validateAndLoginUser = async ({ username, password }) => {

  const url = `${BASE_DOMAIN}/api/auth/user/login`;
  try {
    const response = await axios.post(url, {
      username: username,
      password: password,
    });
    return response
  } catch (error) {
    console.log("could not login");
    return 400
  }
};

const createNewUser = async({firstName, lastName, email, username, password}) => {
  const url = `${BASE_DOMAIN}/api/auth/user/register`;
  try {
    const response = await axios.post(url, {
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password: password,
    });
    return response.data
  } catch (error) {
    console.log("Could not Create account. Error in system");
    return 400
  }
}

export { validateAndLoginUser, createNewUser };
