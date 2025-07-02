import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  preferredTime: "",
  agree: false,
};

const validate = (fields: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.phone.trim()) errors.phone = "Phone is required.";
  if (!fields.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) errors.email = "Valid email is required.";
  if (!fields.message.trim()) errors.message = "Please tell us what brings you here.";
  if (!fields.preferredTime.trim()) errors.preferredTime = "Preferred time is required.";
  if (!fields.agree) errors.agree = "You must agree to be contacted.";
  return errors;
};

const ContactForm = () => {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(fields);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      // Here you would send the form data to your backend or email service
    }
  };

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto max-w-xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Contact</h2>
        {submitted ? (
          <div className="text-center text-green-700 font-semibold">Thank you! Your message has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border">
            <div>
              <label className="block font-medium mb-1" htmlFor="name">Name *</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.name ? 'border-red-500' : 'border-border'}`}
                type="text"
                id="name"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="phone">Phone *</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.phone ? 'border-red-500' : 'border-border'}`}
                type="tel"
                id="phone"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="email">Email *</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.email ? 'border-red-500' : 'border-border'}`}
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="message">What brings you here? *</label>
              <textarea
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.message ? 'border-red-500' : 'border-border'}`}
                id="message"
                name="message"
                rows={4}
                value={fields.message}
                onChange={handleChange}
                required
              />
              {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="preferredTime">Preferred time to reach you *</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${errors.preferredTime ? 'border-red-500' : 'border-border'}`}
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={fields.preferredTime}
                onChange={handleChange}
                required
              />
              {errors.preferredTime && <div className="text-red-600 text-sm mt-1">{errors.preferredTime}</div>}
            </div>
            <div className="flex items-center">
              <input
                className={`mr-2 accent-primary border rounded focus:outline-none focus:ring ${errors.agree ? 'border-red-500' : 'border-border'}`}
                type="checkbox"
                id="agree"
                name="agree"
                checked={fields.agree}
                onChange={handleChange}
                required
              />
              <label htmlFor="agree" className="text-sm">I agree to be contacted *</label>
            </div>
            {errors.agree && <div className="text-red-600 text-sm mt-1">{errors.agree}</div>}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded mt-4 hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
