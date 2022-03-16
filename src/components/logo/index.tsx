import logo from "../../assets/grit_bills_logo.png";

interface IProps {
  width?: string;
  height?: string;
}

const defaultProps: IProps = {
  width: "auto",
  height: "auto",
};

function Logo({ width, height }: IProps) {
  return <img src={logo} width={width} height={height} alt="grit bills logo" />;
}

Logo.defaultProps = defaultProps;

export default Logo;
