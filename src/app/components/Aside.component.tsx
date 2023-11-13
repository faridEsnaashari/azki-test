import { WithClassName } from "@/common/types/with-class-name.type";
import Image from "next/image";
import CarImage from "@images/car-green.svg";

function Aside({ className }: WithClassName) {
  return (
    <aside className={className}>
      <div className="h-40 w-full bg-aside-bg xsm:fixed xsm:left-0 xsm:top-0 xsm:h-screen xsm:w-[30vw]"></div>
      <Image
        className="absolute left-0 top-0 w-2/3 xsm:fixed xsm:bottom-12 xsm:left-8 xsm:top-auto xsm:w-[calc(50%-2rem)]"
        src={CarImage}
        alt="car image"
      />
    </aside>
  );
}

export default Aside;
