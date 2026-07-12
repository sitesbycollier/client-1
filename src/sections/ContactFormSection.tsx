import { FormEvent, useId, useState } from "react";

const spaceOptions = [
  "Entry",
  "Kitchen",
  "Family Room",
  "Living Room",
  "Powder Bathroom",
  "Dining Room",
  "Home Office",
  "Main Bedroom",
  "Main Bathroom",
  "Other Bedroom (s)",
  "Other Bathroom (s)",
  "Laundry",
  "Patio / Porch",
  "Pool / Outdoor Area",
  "Other",
] as const;

export const ContactFormSection = (): JSX.Element => {
  const sectionTitleId = useId();
  const [selectedSpaces, setSelectedSpaces] = useState<string[]>([]);
  const [spacesError, setSpacesError] = useState("");

  const handleSpaceToggle = (space: string) => {
    setSelectedSpaces((prev) => {
      if (prev.includes(space)) {
        return prev.filter((item) => item !== space);
      }
      return [...prev, space];
    });
    setSpacesError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (selectedSpaces.length === 0) {
      event.preventDefault();
      setSpacesError("Please select at least one space.");
    }
  };

  return (
    <section
      aria-labelledby={sectionTitleId}
      className="w-full bg-[#f9f7f4] py-12 sm:py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24 lg:w-[340px] shrink-0">
          <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
            Contact Us
          </p>
          <h2
            id={sectionTitleId}
            className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-2xl sm:text-[30px] leading-snug mb-5"
          >
            Tell us about your project
          </h2>
          <p className="[font-family:'Merriweather',Helvetica] font-light text-[#4c4c4c] text-sm sm:text-base leading-relaxed mb-4">
            Complete this intake form and we will email your submission directly
            to our team for review.
          </p>
          <p className="[font-family:'Merriweather',Helvetica] font-normal text-[#7faac4] text-sm sm:text-base leading-relaxed">
            The more detail you share, the faster we can respond.
          </p>
        </div>

        <form
          className="flex-1 w-full flex flex-col gap-5"
          action="https://formsubmit.co/amie@amiewoeppelinteriors.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            value="New Project Inquiry - Amie Woeppel Interiors"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="firstName"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                First Name (required)
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lastName"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                Last Name (required)
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              Email Address (required)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <label className="inline-flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-[#e6ded3] bg-white px-4 py-3">
            <input type="hidden" name="signupUpdates" value="No" />
            <input
              type="checkbox"
              name="signupUpdates"
              value="Yes"
              className="h-5 w-5 shrink-0 appearance-auto accent-[#7faac4] focus:ring-2 focus:ring-[#7faac4] focus:ring-offset-2"
            />
            <span className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]">
              Sign up for news and updates
            </span>
          </label>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              Phone Number (required)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="projectAddress"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              Project Address (required)
            </label>
            <input
              id="projectAddress"
              name="projectAddress"
              type="text"
              autoComplete="street-address"
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="country"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                defaultValue="United States"
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              >
                <option value="United States">United States</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="addressLine1"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                Address Line 1 (required)
              </label>
              <input
                id="addressLine1"
                name="addressLine1"
                type="text"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="addressLine2"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                Address Line 2
              </label>
              <input
                id="addressLine2"
                name="addressLine2"
                type="text"
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="city"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                City (required)
              </label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="state"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                State (required)
              </label>
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="address-level1"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="zipCode"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                ZIP Code (required)
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                autoComplete="postal-code"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="referral"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              How Did You Hear About Us? (required)
            </label>
            <input
              id="referral"
              name="referral"
              type="text"
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="workedWithDesigner"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                Have You Worked With An Interior Designer Before? (required)
              </label>
              <select
                id="workedWithDesigner"
                name="workedWithDesigner"
                defaultValue=""
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="servicesInterested"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                What Services Are You Interested In? (required)
              </label>
              <select
                id="servicesInterested"
                name="servicesInterested"
                defaultValue=""
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Full Service Interior Design">
                  Full Service Interior Design
                </option>
                <option value="New Build / Renovation">
                  New Build / Renovation
                </option>
                <option value="Furnishings and Styling">
                  Furnishings and Styling
                </option>
                <option value="Room-by-Room Design">Room-by-Room Design</option>
              </select>
            </div>
          </div>

          <fieldset className="flex flex-col gap-4 rounded-lg border border-[#d9d9d9] bg-white px-5 py-5 sm:px-6">
            <p className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]">
              What spaces are you interested in our services for? (required)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {spaceOptions.map((space) => (
                <label
                  key={space}
                  className="inline-flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 hover:bg-[#f9f7f4]"
                >
                  <input
                    type="checkbox"
                    name="spacesInterested[]"
                    value={space}
                    checked={selectedSpaces.includes(space)}
                    onChange={() => handleSpaceToggle(space)}
                    className="h-5 w-5 shrink-0 appearance-auto accent-[#7faac4] focus:ring-2 focus:ring-[#7faac4] focus:ring-offset-2"
                  />
                  <span className="[font-family:'Merriweather',Helvetica] text-sm text-[#636363]">
                    {space}
                  </span>
                </label>
              ))}
            </div>
            {spacesError ? (
              <p className="[font-family:'Merriweather',Helvetica] text-sm text-red-600">
                {spacesError}
              </p>
            ) : null}
          </fieldset>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="projectTimeline"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                What Is Your Project Timeline? (required)
              </label>
              <select
                id="projectTimeline"
                name="projectTimeline"
                defaultValue=""
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Still in the Planning Stages">
                  Still in the Planning Stages
                </option>
                <option value="Under Construction currently">
                  Under Construction currently
                </option>
                <option value="A recent purchase (no work has been done yet)">
                  A recent purchase (no work has been done yet)
                </option>
                <option value="Current Residence">Current Residence</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="idealStartDate"
                className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
              >
                Ideal Start Date (required)
              </label>
              <input
                id="idealStartDate"
                name="idealStartDate"
                type="date"
                required
                className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="projectDescription"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              Tell Us About Your Project! (required)
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={4}
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] resize-none focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="budget"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              What Is Your Budget For The Project, Including Design Services?
              (required)
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Under $50,000">Under $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="$100,000 - $250,000">$100,000 - $250,000</option>
              <option value="$250,000+">$250,000+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="inspirationFiles"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              If You Have Any Inspiration Images, Floorplans, Current Images Of
              Your Space - Upload Them Here
            </label>
            <input
              id="inspirationFiles"
              name="inspirationFiles"
              type="file"
              multiple
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm text-[#636363] file:mr-4 file:rounded-full file:border-0 file:bg-[#c1b4a1] file:px-4 file:py-2 file:text-sm file:font-normal file:text-white hover:file:bg-[#a8997f]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="projectGoals"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              What Are Your Goals For This Project? (required)
            </label>
            <textarea
              id="projectGoals"
              name="projectGoals"
              rows={3}
              required
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] resize-none focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="projectVision"
              className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-[#636363]"
            >
              What Is Your Vision?
            </label>
            <textarea
              id="projectVision"
              name="projectVision"
              rows={3}
              className="w-full rounded-lg border border-[#d9d9d9] bg-white px-4 py-3 text-sm sm:text-base text-[#1e1e1e] resize-none focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-1 flex items-center justify-center rounded-full bg-[#c1b4a1] hover:bg-[#a8997f] active:bg-[#9a8a70] px-6 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7faac4] focus:ring-offset-2 shadow-sm"
          >
            <span className="[font-family:'Merriweather',Helvetica] text-sm sm:text-base font-normal text-white tracking-wide">
              Submit Inquiry
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
