import React from "react";
import useSolvedQueries from "../../hooks/useSolvedQueries";

const SolvedQueries = () => {
  const { solvedQueries, isLoading } = useSolvedQueries();

  if (isLoading) return null;

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl font-bold mb-4">SOLVED QUERIES</h1>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Email Id</th>
              <th className="py-2 px-4 border-b">Course Name</th>
              <th className="py-2 px-4 border-b">Contact Number</th>
              <th className="py-2 px-4 border-b">Query</th>
            </tr>
          </thead>
          <tbody>
            {solvedQueries.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.course} </td>
                <td className="py-2 px-4">{item.contact}</td>
                <td className="py-2 px-4">{item.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolvedQueries;
