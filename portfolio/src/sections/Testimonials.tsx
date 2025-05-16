import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Joakim Rosén",
    position: "CTO & Co-founder @ Etals",
    text: "Daniel is a curious and driven individual who thrives on challenges. He successfully developed a fairly advanced product from scratch — incorporating both AI and OCR — despite having no prior experience in the area. His ability to take ownership and learn quickly far exceeded our expectations.",
    avatar: memojiAvatar1,
    imageStyles: {
      transform: "scale(0.89)",
    },
  },
  {
    name: "Warhell Nasim",
    position: "Senior Software Engineer @ Flightradar24",
    text: "Daniel is someone you can always count on to meet deadlines. He approaches problem-solving with focus and creativity, and stays calm under pressure to ensure tasks are completed accurately and on time.",
    avatar: memojiAvatar2,
    imageStyles: { transform: "translate(1px, 2px)" },
  },
  {
    name: "Oscar Altkvist",
    position: "Junior Software Developer @ Etals",
    text: "Daniel is friendly and easy to talk to, and he communicates clearly with both teammates and clients. He’s a fast learner who adapts easily whenever things change.",
    avatar: memojiAvatar3,
    imageStyles: {
      objectPosition: "-2px center",
      transform: "scale(1.04) translateY(2px)",
    },
  },
  {
    name: "Rebecka Larsson",
    position: "Software Developer Intern @ Etals",
    text: "Daniel is a friendly and easygoing teammate who brings positive energy into every collaboration. He’s also structured, self-motivated, and dependable—able to take full ownership of his work and drive progress independently.",
    avatar: memojiAvatar4,
    imageStyles: {
      objectPosition: "-4px center",
      transform: "scale(0.88) translateY(-3px)",
    },
  },
  {
    name: "Paulius Kamuntavicius",
    position: "Software Developer Intern @ Etals",
    text: "I had the pleasure of working with Daniel, and he was a truly great colleague to collaborate with. He approaches problem-solving with a positive attitude, a team-first mindset, and a humble approach that makes working with him easy and rewarding. Daniel lifts up everyone around him, creating a supportive and collaborative environment where the whole team can do their best work. I'd glady work with him again",
    avatar: memojiAvatar5,
    imageStyles: {
      transform: "scale(0.86)",
    },
  },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            title="What Others Say About Me"
            eyebrow="Testimonials"
            description="People I've worked with share their experiences and insights from our collaborations."
          />
          <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
            <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
              {[...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md md:p-8 p-6 hover:-rotate-3 transition-transform "
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 object-cover rounded-full"
                            style={testimonial.imageStyles}
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm text-white/50 md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
