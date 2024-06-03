import React, { useState } from "react";
import image from "../../images/Query image.jpg";
import useSubmitQuery from "../../hooks/useSubmitQuery";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    course: "",
    contact: "",
    query: "",
  });
  const { submitQuery } = useSubmitQuery();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    submitQuery(formData);
  };

  return (
    <div className="">
      <div style={{ backgroundImage: `url(${image})` }} className="relative">
        <div className="max-w-md mx-auto py-10">
          <form
            onSubmit={handleSubmit}
            className="bg-[#76a0ab] shadow-md rounded  px-8 pt-6 pb-8"
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Id
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="course"
              >
                Course Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="course"
                type="text"
                placeholder="Course Name"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="contact"
              >
                Conatct Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="tel"
                placeholder="Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="query"
              >
                Query Question
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="query"
                placeholder="Query Question"
                name="query"
                value={formData.query}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
