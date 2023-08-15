const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPost = async () => {
  try {
    // Request our response object from our api
    const response = await fetch(`${BASE_URL}/posts`);
    // We want to convert it into an object
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error("Error /GET Posts", error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("REGISTER USER----->", result);
    return result;
  } catch (error) {
    console.error("There was /POST Registering User", error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("Login USER----->", result);
    return result;
  } catch (error) {
    console.error("There was /POST Logging in User", error);
  }
};
