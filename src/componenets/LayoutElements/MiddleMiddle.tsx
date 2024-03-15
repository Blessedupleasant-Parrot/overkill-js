import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

type Props = {
  children: React.ReactNode;
  style?: {
    wrapper?: StyleXStyles<{
      height?: string;
    }>;
  };
};

const defStyles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px'
  }
});

const MiddleMiddle = ({ children, style }: Props) => {
  return (
    <div {...stylex.props(defStyles.wrapper, style?.wrapper)}>
      <div className="Middle_Middle_Container">{children}</div>
    </div>
  );
};

export default MiddleMiddle;
