import axios from "axios";

export async function getActiveQueries() {
  try {
    const response = await axios.get("http://localhost:3000/query/active", {
      withCredentials: true,
    });

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSolvedQueries() {
  try {
    const response = await axios.get("http://localhost:3000/query/solved", {
      withCredentials: true,
    });

    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function solveQuery(queryId) {
  try {
    const response = await axios.post(
      `http://localhost:3000/query/solve/${queryId}`
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function submitQuery(data) {
  try {
    const response = await axios.post(
      "http://localhost:3000/query/submit",
      data
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
