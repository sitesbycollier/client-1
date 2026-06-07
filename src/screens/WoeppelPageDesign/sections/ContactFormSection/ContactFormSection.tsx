import { FormEvent, useId, useState } from "react";

const contactFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "Your address",
    autoComplete: "street-address",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    autoComplete: "email",
  },
] as const;

export const ContactFormSection = (): JSX.Element => {
  const sectionTitleId = useId();
  const serviceFieldId = useId();
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    email: "",
    services: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section
      aria-labelledby={sectionTitleId}
      className="w-full bg-[#f9f7f4] py-12 sm:py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left: CTA copy */}
        <div className="lg:sticky lg:top-24 lg:w-[340px] shrink-0">
          <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
            Get In Touch
          </p>
          <h2
            id={sectionTitleId}
            className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-2xl sm:text-[30px] leading-snug mb-5"
          >
            Ready for your new home?
          </h2>
          <p className="[font-family:'Merriweather',Helvetica] font-light text-[#4c4c4c] text-sm sm:text-base leading-relaxed mb-4">
            Let&#39;s bring your vision to life and create a space you&#39;ll
            love coming home to.
          </p>
          <p className="[font-family:'Merriweather',Helvetica] font-normal text-[#7faac4] text-sm sm:text-base leading-relaxed">
            Contact us today!
          </p>
        </div>

        {/* Right: Form */}
        <form
          className="flex-1 w-full flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {contactFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label
                htmlFor={field.id}
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                value={formValues[field.id]}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [field.id]: e.target.value,
                  }))
                }
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={serviceFieldId}
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              Which services are you interested in?
            </label>
            <div className="relative">
              <textarea
                id={serviceFieldId}
                name="services"
                value={formValues.services}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    services: e.target.value,
                  }))
                }
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] placeholder:text-[#b3b3b3] resize-none focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-1 flex items-center justify-center rounded-full bg-[#c1b4a1] hover:bg-[#a8997f] active:bg-[#9a8a70] px-6 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:ring-offset-2 shadow-sm"
          >
            <span className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-white tracking-wide">
              {submitted ? "Message Sent ✓" : "Submit"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
