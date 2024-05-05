import { SVGProps } from "react";
import {
  Pen,
  Logo,
  Img,
  Calendar,
  Arrow,
  EmotionDefault,
  Clear,
} from "./Icons";

interface IIconProps extends SVGProps<SVGSVGElement> {
  name: EIcons;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum EIcons {
  pen = "Pen",
  logo = "Logo",
  img = "Img",
  calendar = "Calendar",
  arrow = "Arrow",
  dafault = "EmotionDefault",
  clear = "Clear",
}

export const Icon = (props: IIconProps) => {
  const { name } = props;

  switch (name) {
    case EIcons.logo:
      return <Logo {...props} />;
    case EIcons.pen:
      return <Pen {...props} />;
    case EIcons.img:
      return <Img {...props} />;
    case EIcons.calendar:
      return <Calendar {...props} />;
    case EIcons.arrow:
      return <Arrow {...props} />;
    case EIcons.dafault:
      return <EmotionDefault {...props} />;
    case EIcons.clear:
      return <Clear {...props} />;

    default:
      return <></>;
  }
};
