import monroeImage from "../assets/team/monroe.webp";
import vincentImage from "../assets/team/vincent.webp";

const founderParagraphs = [
  "Amie Woeppel is the creative force and visionary behind Amie Woeppel Interiors, an interior design studio known for transforming spaces into personalized havens of style and comfort. With over 10 years of experience, Amie creates unique, sophisticated, and functional designs that reflect the individuality of each client.",
  "Amie holds an AAS Degree in Business Administration and a Certificate in Architectural Interior Design from New York Institute of Art + Design, where she developed both the technical and creative sides of her design practice. After completing her studies, she pursued her dream of small business ownership and founded Amie Woeppel Interiors.",
  "When she is not immersed in design projects, Amie enjoys traveling with her husband and two dogs, often finding inspiration along the way. She is also active in the local community through events and fundraisers, and is a member of Women with a Mission, the fundraising arm for the Cooper-Anthony Mercy Child Advocacy Center.",
];

const teamMembers = [
  {
    name: "Vincent Elsworth",
    role: "Chief \"Canine\" Officer",
    imageSrc: vincentImage,
    imageAlt: "Vincent Elsworth",
    description:
      "Otherwise known as \"The Boss,\" Vincent keeps us all on a short leash. Born with an innate sense of design and an eye for the comfiest spots in the house, Vincent has been part of the team since the beginning. His enthusiasm for cozy spaces and durable materials helps inspire interiors that are stylish and made for real life.",
  },
  {
    name: "Monroe Bailey",
    role: "Junior \"Barkitect\"",
    imageSrc: monroeImage,
    imageAlt: "Monroe Bailey",
    description:
      "Whatever mommy designs, Monroe loves. She gives her paw of approval with lots of kisses. She is still too young to be on the payroll, but if you have a treat or a ball to throw, Monroe will never turn you down. Her love for comfort and style keeps our designs grounded in beauty, function, and everyday joy.",
  },
];

export const DesignerIntroSection = (): JSX.Element => {
  return (
    <section aria-label="Founder and team" className="flex flex-col gap-10">
      <div>
        <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
          Meet the Founder
        </p>
        <div className="flex flex-col gap-4">
          {founderParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="[font-family:'Merriweather',Helvetica] font-light text-[#4c4c4c] text-sm sm:text-base leading-[1.85]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
          Meet the Team
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col gap-4 rounded-lg border border-[#f0ebe4] bg-white p-5 shadow-sm"
            >
              <img
                className="h-52 w-full rounded-lg object-cover object-center"
                alt={member.imageAlt}
                src={member.imageSrc}
              />
              <div>
                <h2 className="[font-family:'Merriweather',Helvetica] font-normal text-[#636363] text-lg leading-snug">
                  {member.name}
                </h2>
                <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#7faac4] text-sm tracking-[1.5px] uppercase mt-1">
                  {member.role}
                </p>
              </div>
              <p className="[font-family:'Merriweather',Helvetica] font-light text-[#4c4c4c] text-sm leading-[1.8]">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
