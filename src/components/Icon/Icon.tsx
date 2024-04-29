import { SVGProps } from "react";
import { Pen, Logo } from "./Icons";

interface IIconProps extends SVGProps<SVGSVGElement> {
  name: EIcons;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum EIcons {
  pen = "Pen",
  logo = "Logo",
}

export const Icon = (props: IIconProps) => {
  const { name } = props;

  switch (name) {
    case EIcons.logo:
      return <Logo {...props} />;
    case EIcons.pen:
      return <Pen {...props} />;

    default:
      return <></>;
  }
};
