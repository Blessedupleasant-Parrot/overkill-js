import * as stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex";

type Props = {
  style?: StyleXStyles
};

const styles = stylex.create({
  page: { color: "red" }
});

const Page = ({ style }: Props) => {
  return <div className="Page" {...stylex.props(styles.page, style)}></div>;
};

export default Page;
