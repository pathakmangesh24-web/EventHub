import { useState } from "react";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  comments_questions: "",
  special_requests: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Submitting..." });

    try {
      const response = await fetch("http://localhost:3000/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = Array.isArray(data?.errors)
          ? data.errors.join(". ")
          : data?.error || "Request failed";
        throw new Error(errorMessage);
      }

      setStatus({ type: "success", message: "Registration submitted successfully!" });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section
        className="relative h-[510px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245, 166, 75, 0.72), rgba(245, 166, 75, 0.72)), url('https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 text-center">
        <div className="space-y-2 text-[16px] leading-6">
          <p>888 Griffiths Way, Themeland ML 12345</p>
          <p>Tel: (987) 654-3210</p>
          <p>
            Email:{" "}
            <a href="mailto:kirandighe1945@gmail.com" className="text-blue-600 hover:underline">
              kirandighe1945@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-12 space-y-2 text-[16px]">
          <p className="font-medium">Open Hours:</p>
          <p>Monday-Friday: 9:00AM-7:00PM</p>
          <p>Saturday: 10:30AM-8:00PM</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label htmlFor="first_name" className="mb-2 block text-[16px] font-bold">
              First Name*
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              value={form.first_name}
              onChange={handleChange}
              required
              className="h-[50px] w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="mb-2 block text-[16px] font-bold">
              Last Name*
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              value={form.last_name}
              onChange={handleChange}
              required
              className="h-[50px] w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[16px] font-bold">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="h-[50px] w-full rounded border border-gray-300 px-4 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="comments_questions" className="mb-2 block text-[16px] font-bold">
              Comments and/or Questions*
            </label>
            <textarea
              id="comments_questions"
              name="comments_questions"
              rows="5"
              value={form.comments_questions}
              onChange={handleChange}
              required
              className="w-full resize-y rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="special_requests" className="mb-2 block text-[16px] font-bold">
              Any special requests?
            </label>
            <textarea
              id="special_requests"
              name="special_requests"
              rows="4"
              value={form.special_requests}
              onChange={handleChange}
              className="w-full resize-y rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>

          {status.message ? (
            <p
              className={`text-center text-sm font-medium ${
                status.type === "success"
                  ? "text-green-600"
                  : status.type === "error"
                    ? "text-red-600"
                    : "text-blue-600"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="rounded-xl bg-[#4b382e] px-20 py-4 text-lg font-medium text-white transition hover:bg-[#382920] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === "loading" ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg transition hover:bg-blue-700"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default Contact;