import Image from "next/image";
import Link from "next/link";
import { email, mobile, phone } from "@/assets/icons";
import Social from "./Social";
import { Container, ParentDiv } from ".";

export default function Topbar() {
  return (
    <ParentDiv style="h-14 bg-midnight">
      <Container style="flex items-center justify-between overflow-x-scroll gap-12 snap-mandatory snap-x scroll-smooth no-scrollbar">
        <div className="flex-center gap-12">
          <div className="flex items-center gap-2 text-white w-max">
            <Image src={phone} alt="menuBar" width={30} height={30} />
            <Link href="tel"> 02547621</Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Image src={mobile} alt="menuBar" width={30} height={30} />
            <Link href="tel" className="w-max">
              +614598347
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Image src={email} alt="menuBar" width={30} height={30} />
            <Link href="email" className="w-max">
              {" "}
              example@gmail.com
            </Link>
          </div>
        </div>
        <Social />
      </Container>
    </ParentDiv>
  );
}
