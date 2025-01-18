import React, { useRef } from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const formRef = useRef();  // Declare form reference

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99a34d62-6920-434a-a3b7-bc51bb606af1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        formRef.current.reset(); // Reset form after successful submission
      } else {
        setResult(data.message); // Show error message from API response
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="flex justify-center gap-12 z-10 items-center px-10 py-16">
      <div className="relative flex flex-col items-center justify-between w-full max-w-4xl px-4 py-5 gap-6">
        
        <h1 className="text-white text-4xl font-bold">Let’s Collaborate</h1>
        <p className="text-cyan-400 text-sm font-light uppercase tracking-widest">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        
        <form
          ref={formRef}  // Attach ref to form
          onSubmit={onSubmit}
          className="w-full max-w-md bg-opacity-80 rounded-lg shadow-lg  gap-3 flex flex-col"
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            Email Me 🚀
          </h2>
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 bg-transparent border border-[#12f7ff] rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 bg-transparent border border-[#12f7ff] rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
    
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="flex-1 bg-transparent border border-[#12f7ff] rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="submit"
            value="Send"
            className="w-full text-center bg-cyan-600 text-white font-semibold py-3 rounded-lg mt-2 cursor-pointer hover:bg-gray-800 hover:border-2 hover:border-cyan-300 hover:text-white hover:scale-105 transition-transform duration-300"
          />
        </form>

        {result && (
          <div className="mt-4 text-center text-gray-200">
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
