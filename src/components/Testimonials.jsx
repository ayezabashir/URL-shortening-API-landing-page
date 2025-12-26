import { useState } from "react";
import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";
import person4 from "/person4.jpg";
import leftarrow from "/arrow-left.svg";
import rightarrow from "/arrow-right.svg";
import TestimonialCard from "./TestimonialCard";

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

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState("right");
  const current = testimonials[currentTestimonial];
  const buttonStyles = "w-10 rounded-md bg-purple/25 cursor-pointer border-2 border-purple group"
  const buttonImage = "p-2 transform group-hover:-translate-x-1 duration-100"

  const prevTestimonial = (index) => {
    setDirection("left")
    if (index < 1) {
      setCurrentTestimonial(testimonials.length - 1);
    } else {
      setCurrentTestimonial(index - 1);
    }
  }

  const nextTestimonial = (index) => {
    setDirection("right")
    if (index >= testimonials.length - 1) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(index + 1)
    }
  }

  return (
    <div className='bg-blue w-full py-15'>
      <div className="container">
        <h3 className=" text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple">What our customers are saying</h3>
        <div className="relative py-15 ">
          {
            <TestimonialCard key={currentTestimonial} direction={direction} pic={current.pic} name={current.name} role={current.role} quote={current.quote} />
          }
          <div className="absolute bottom-0 w-full flex justify-center items-center gap-5">
            <button className={buttonStyles} onClick={() => prevTestimonial(currentTestimonial)}>
              <img className={buttonImage} src={leftarrow} alt="left arrow" />
            </button>
            <button className={buttonStyles} onClick={() => nextTestimonial(currentTestimonial)}>
              <img className={buttonImage} src={rightarrow} alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials