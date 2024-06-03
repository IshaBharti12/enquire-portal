// import React from "react";

// const ActiveQueries = () => {
//   const array = [
//     {
//       email: "abc@gmail.com",
//       course: "tech",
//       contact: "123456",
//       query: "asdfghjkzxcvbnm",
//     },
//     {
//       email: "abc@gmail.com",
//       course: "tech",
//       contact: "123456",
//       query: "asdfghjkzxcvbnm",
//     },
//     {
//       email: "abc@gmail.com",
//       course: "tech",
//       contact: "123456",
//       query: "asdfghjkzxcvbnm",
//     },
//   ];
//   return <div>ActiveQueries</div>;
// };

// export default ActiveQueries;


import React from "react";

const ActiveQueries  = () => {
  const array = [
    { Email: 1, Course: 'Mark', Contact: 'Otto', Query: '@mdo'},
    { Email: 1, Course: 'Mark', Contact: 'Otto',  Query: '@mdo'},
    { Email: 1, Course: 'Mark', Contact: 'Otto',  Query: '@mdo'},
  ];

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
            {array.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{item.Email}</td>
                <td className="py-2 px-4">{item.Course } </td>
                <td className="py-2 px-4">{item.Contact}</td>
                <td className="py-2 px-4">{item.Query}</td>
                <td className="py-2 px-4">
                  <button className="bg-green-500 text-white py-1 px-2 rounded-lg">Solved</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveQueries;
