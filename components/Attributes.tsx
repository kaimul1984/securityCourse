import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";
import { TfiSupport } from "react-icons/tfi";

const attributes = [
  {
    id: 1,
    title: "qualified & certified",
    icon: <BiAnalyse />,
  },
  {
    id: 2,
    title: "compititive price",
    icon: <FaHandHoldingDollar />,
  },
  {
    id: 3,
    title: "supportive environment",
    icon: <TfiSupport />,
  },
  {
    id: 4,
    title: "skilled trainers",
    icon: <GiSkills />,
  },
];

export default function Attributes() {
  return (
    <div className="w-full min-h-[200px] flex-center mb-[100px]">
      <div className="container flex-center 2xl:gap-6 md:gap-10 flex-wrap py-10">
        {attributes.map((item) => (
          <div
            key={item.id}
            className=" group w-[320px] h-[150px] bg-midnight rounded-lg flex-center gap-4 p-4 shadow-2xl transition-all hover:bg-warning "
          >
            <span className="w-16 h-16 p-4 flex-center rounded-full bg-white text-3xl ">
              {item.icon}
            </span>
            <span className="text-white font-bold text-xl capitalize group-hover:text-dark ">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
