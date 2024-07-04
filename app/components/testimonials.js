function Testimonials() {
    const testimonials = [
      {
        "name": "Jane Smith",
        "position": "CEO",
        "company": "Tech Innovations Inc.",
        "testimonial": "John Doe's strategic leadership as the CTO at Innovax Systems has been instrumental in guiding our partnership. His deep understanding of technology trends and commitment to excellence have consistently exceeded our expectations. John's innovative approach and collaborative spirit make him a valuable asset to any organization.",
      },
      {
        "name": "Michael Johnson",
        "position": "VP of Engineering",
        "company": "Global Solutions Ltd.",
        "testimonial": "Having John Doe as the CTO at Innovax Systems has been inspiring. His ability to align technology initiatives with business goals is exceptional. John's technical expertise and dedication to quality have significantly impacted our collaboration, leading to successful outcomes and strengthened partnerships.",
      }
    ];
  
    return (
      <div id="testimonials" className="w-full min-h-screen flex flex-col py-5 px-32 gap-8">
        <div className="font-bold text-5xl text-center mt-32 mb-5">
          testimonials.
        </div>
        <div className="">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-200 p-5 rounded-md mb-5">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm italic text-green">{testimonial.position}, {testimonial.company}</p>
              <p className="mt-2">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Testimonials;
  