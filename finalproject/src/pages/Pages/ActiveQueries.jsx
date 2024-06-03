import React from "react";
import useActiveQuries from "../../hooks/useActiveQuries";
import useSolveQuery from "../../hooks/useSolveQuery";

const ActiveQueries = () => {
  const { activeQueries, isLoading } = useActiveQuries();
  const { solveQuery } = useSolveQuery();

  function handleSolve(queryId) {
    solveQuery(queryId);
  }

  if (isLoading) return null;

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl font-bold mb-4">ACTIVE QUERIES</h1>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Email Id</th>
              <th className="py-2 px-4 border-b">Course Name</th>
              <th className="py-2 px-4 border-b">Contact Number</th>
              <th className="py-2 px-4 border-b">Query</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeQueries.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.course} </td>
                <td className="py-2 px-4">{item.contact}</td>
                <td className="py-2 px-4">{item.query}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-green-500 text-white py-1 px-2 rounded-lg"
                    onClick={() => handleSolve(item._id)}
                  >
                    Solved
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveQueries;
