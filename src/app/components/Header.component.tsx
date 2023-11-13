import Image from "next/image";
import LogoIcon from "@images/logo.svg";
import { fixHeaderText } from "../texts";
import ProfileAction from "./ProfileAction.component";

function Header() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <Image className="w-4" src={LogoIcon} alt="logo icon" />
        <h3 className="hidden text-2xl xsm:block">{fixHeaderText}</h3>
        <ProfileAction />
      </div>
    </div>
  );
}

export default Header;
