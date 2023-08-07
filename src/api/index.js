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
