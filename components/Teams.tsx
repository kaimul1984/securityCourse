import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const teams = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    name: "David malan",
    position: "CEO",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    name: "Andres Jhohne",
    position: "DIRECTOR",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    name: "John klenex",
    position: "FOUNDER",
  },
  // {
  //   id: 4,
  //   image:
  //     "https://images.unsplash.com/photo-1576369833619-67a70e65ad5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  //   name: "alex watson",
  //   position: "MANAGER",
  // },
];

export default function Teams() {
  return (
    <div className="w-full bg-[url('/img-4.jpg')] bg-cover bg-center min-h-[300px] mb-[100px]">
      <div className="container p-8 mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">
          meet our professionals
        </h1>
        <div className="w-[100px] h-1 bg-warning mx-auto mb-8" />

        <div className="flex flex-wrap items-center justify-between gap-5 ">
          {teams.map((team) => (
            <TeamMember
              key={team.id}
              image={team.image}
              name={team.name}
              position={team.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const TeamMember = ({ image, name, position }: any) => {
  return (
    <div className="w-[400px] bg-silver flex flex-col items-center justify-center p-4 rounded-xl">
      <div className="relative transition-transform duration-500 transform hover:-translate-y-5">
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-[350px] h-[310px] rounded-full"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 flex flex-col items-center">
          <FaFacebook className="mb-2 fill-blue hover:fill-red" />
          <FaTwitter className="mb-2 fill-blue hover:fill-red" />
          <FaInstagram className="fill-blue hover:fill-red" />
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center text-center gap-2 my-4">
        <h2 className="text-lg font-medium">{name}</h2>
        <h4 className="text-success">{position}</h4>
        <div className="w-[100px] h-1 bg-warning" />
      </div>
      <div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          exercitationem placeat molestias repellat vitae itaque neque quia
          pariatur consectetur minima eius, odio sequi inventore debitis optio
          ab architecto quasi unde! Aperiam, fuga! Modi minima deleniti, enim
          asperiores laborum quo vero esse excepturi repudiandae voluptates
          quaerat voluptas minus fugit doloribus fuga.
        </p>
      </div>
    </div>
  );
};
