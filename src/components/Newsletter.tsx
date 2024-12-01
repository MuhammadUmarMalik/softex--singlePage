import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby8eryNznWQwNqy3B4HdSB2ZfBXrLYZtNXhxesPIcqx_TzfAAuP5rji7DSqntNB6ZLE/exec",
        {
          method: "POST",
          body: new URLSearchParams({ email }),
        }
      );

      if (res.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to submit. Please try again.");
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          Subscribe to get the latest news and updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4 mx-auto"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="p-3 w-full sm:w-64 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="p-3 w-full sm:w-auto bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <div className="mt-4 text-sm text-gray-600">
            <p>{message}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
