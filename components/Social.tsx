import Image from "next/image";
import { facebook, instagram, linkedin, twitter } from "@/assets/icons";

const Social = () => {
  return (
    <div className="flex items-center gap-4">
      {[facebook, instagram, twitter, linkedin].map((image, index) => (
        <Image
          key={index}
          src={image}
          width={30}
          height={30}
          alt="social icon"
        />
      ))}
    </div>
  );
};

export default Social;
