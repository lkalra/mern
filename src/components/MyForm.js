import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    profileImage: "",
    name: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "CA",
    country: "US",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    // Display the entered data
    console.log("Form Data:", formData);
  };

  const exportToCSV = () => {
    // Export data to CSV format
    const csvContent = Object.values(formData).join(",");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formData.csv";
    link.click();
  };

  return (
    <div style={{ marginLeft: "25px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profileImage">Profile Image (JPG): </label>
          <input
            type="file"
            accept=".jpg"
            id="profileImage"
            name="profileImage"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name (25-character limit): </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength="25"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone (+1-(XXX) XXX-XXXX format): </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^\+1-\(\d{3}\) \d{3}-\d{4}$"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="streetAddress">Street Address: </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <select id="state" name="state" onChange={handleChange} required>
            <option value="CA">CA</option>
            <option value="NY">NY</option>
            <option value="AT">AT</option>
          </select>
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <select id="country" name="country" onChange={handleChange} required>
            <option value="IN">IN</option>
            <option value="US">US</option>
            <option value="EU">EU</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display the entered data */}
      {Object.keys(formData).map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {formData[key]}
        </p>
      ))}

      {/* Button to export data to CSV */}
      <button onClick={exportToCSV}>Export to CSV</button>
    </div>
  );
};

export default Form;
