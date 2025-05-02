import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

const toolboxItems = [
  {
    title: "JavasScript",
    icon: "",
  },
  {
    title: "cxzzcxz",
    icon: "",
  },
  {
    title: "ttyyt",
    icon: "",
  },
  {
    title: "bnbbnbbn",
    icon: "",
  },
  {
    title: "yiiknbn",
    icon: "",
  },
  {
    title: "qweee",
    icon: "",
  },
  {
    title: "Jvvvv",
    icon: "",
  },
  {
    title: "nbmbnmbn",
    icon: "",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="About me"
        eyebrow="About me"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <Image src={bookImage} alt="Book" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div></div>
        </Card>
      </div>
    </div>
  );
};
