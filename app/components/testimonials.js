function Testimonials() {
    const testimonials = [
      {
        "name": "Zixian, Chen",
        "position": "Deputy Director - Service Delivery Technology",
        "company": "Ministry of Defence",
        "testimonial": "Chu Lin joined us as an intern for 3 months in May 2024, developing a proof of concept for a platform that could automate contact center operations. I very much enjoyed our time working together. Chu Lin was adaptable, she worked hard, she worked really well independently, and she had a very warm personality that made her a great teammate to be around.\n\nShe took on multiple roles – choosing a stack, developing, writing tests, and working with business users to incorporate feedback on the POC. We all loved what she pushed out on a continuous schedule. The POC worked well. She also did a fabulous job leading demos to various groups of business owners and users, who were sometimes skeptical at the start, but were all impressed by her work thereafter. \n\nI would highly recommend Chu Lin for future roles!",
      },
      {
        "name": "Alex Koh",
        "position": "Chief Technology Officer",
        "company": "Innovax System Pte Ltd",
        "testimonial": "I had the pleasure of supervising Tian Chu Lin during her internship with our software engineering team. Tian consistently demonstrated a diligent work ethic and a thoughtful approach to problem-solving. Her ability to think through complex issues thoroughly was particularly impressive for an intern at her level.\n\nOver the course of her internship, Tian showed remarkable adaptability and a keen interest in cutting-edge technologies. She quickly grasped and applied generative AI techniques, including Retrieval-Augmented Generation (RAG) and prompt engineering. Tian's initiative in exploring these areas significantly contributed to our team's projects.\n\nFurthermore, Tian ventured into the realm of multi-modal Large Language Models (LLMs), exploring vision-capable LLMs that can process both text and images into the RAG framework. This showcased her versatility and eagerness to learn. Her willingness to tackle new challenges and her quick uptake of these advanced, multi-modal concepts were truly commendable.\n\nTian's contributions to our team were valuable, and her growth throughout the internship was evident. She has a bright future ahead in software engineering, particularly in AI-related fields. I confidently recommend Tian for any roles that require a combination of analytical thinking, dedication, and a passion for emerging technologies.",
      }
    ];
  
    return (
      <div id="testimonials" className="w-full min-h-screen flex flex-col py-5 px-10 md:px-16 lg:px-32 gap-8">
        <div className="font-bold text-5xl text-center mt-32 mb-5">
          testimonials.
        </div>
        <div className="">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-200 p-5 rounded-md mb-5">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm italic text-green">{testimonial.position}, {testimonial.company}</p>
              <p className="mt-2 whitespace-pre-wrap">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Testimonials;
  