import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";
import person4 from "/person4.jpg";


const testimonials = [
  {
    pic: person1,
    name: "Sara Jacobs",
    role: "Digital Marketing Lead",
    quote:
      "Shortly made link sharing effortless for our team. The platform is fast, reliable, and the QR feature has been a game-changer for our campaigns. We’ve seen better engagement in just weeks!",
  },
  {
    pic: person2,
    name: "Alisson Rae",
    role: "Frontend Developer",
    quote:
      "I love how clean and simple Shortly is. No unnecessary steps, no confusion — just paste, shorten, and share. It works perfectly across all my devices and feels super secure.",
  },
  {
    pic: person3,
    name: "Maddison James",
    role: "Content Creator",
    quote:
      "The click statistics helped me understand my audience better. Shortly isn’t just a tool, it’s insight. Plus, the links always stay active. That’s reliability I can count on.",
  },
  {
    pic: person4,
    name: "Charles Johny",
    role: "Startup Founder",
    quote:
      "We switched to Shortly for its security and performance. The HTTPS encryption and malware filtering gave us peace of mind. Short links that are safe and smart — exactly what we needed.",
  },
];
{/* <TestimonialCard key={index} pic={item.pic} name={item.name} role={item.role} quote={item.quote} /> */ }

const Testimonials = () => {
  const [currTestimonial, setCurrTestimonial] = useState(0);
  let current = testimonials.filter((_, index) => index === currTestimonial)
  console.log(current)

  return (
    <div className='bg-blue min-h-200 w-full'>
      <div className="container">
        <div className="flex">
          {
            
          }
        </div>
        <div className="absolute">
          <button className="right-0" onClick={(prev) => setCurrTestimonial(prev + 1)}>Nex</button>
          <button className="left-0" onClick={(prev) => setCurrTestimonial(prev - 1)}>Prev</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials