import { Query } from "../models/query.model.js";

export const submitQuery = async (req, res) => {
  try {
    const { email, course, contact, query } = req.body;

    if (!email || !course || !contact || !query) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    await Query.create({
      email,
      course,
      contact,
      query,
    });

    return res.status(200).json({ message: "Your query has been submitted" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const solveQuery = async (req, res) => {
  try {
    const { queryId } = req.params;

    const findQuery = await Query.findById(queryId);

    if (!findQuery)
      return res.status(400).json({ error: "Query does not exists" });

    const updatedQuery = await Query.findByIdAndUpdate(
      findQuery._id,
      {
        $set: { isActive: false },
      },
      { new: true }
    );

    console.log(updatedQuery);

    return res.status(200).json("Query is solved");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getActiveQueries = async (req, res) => {
  try {
    const queries = await Query.find({ isActive: true });

    return res.status(200).json({ data: queries });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const getSolvedQueries = async (req, res) => {
  try {
    const queries = await Query.find({ isActive: false });

    return res.status(200).json({ data: queries });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};
