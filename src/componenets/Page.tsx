import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

type Props = {
  children: React.ReactNode;
  style?: {
    page?: StyleXStyles<{
      width?: string;
      fontFamily?: string;
    }>;
    pageContents?: StyleXStyles<{
      width?: string;
      margin?: string;
    }>;
  };
};
const defStyles = stylex.create({
  page: { width: '100%', fontFamily: 'inherit' },
  pageContents: { width: '1024px', margin: '0 auto' }
});

const Page = ({ children, style }: Props) => {
  return (
    <div {...stylex.props(defStyles.page, style?.page)}>
      <div {...stylex.props(defStyles.pageContents, style?.pageContents)}>
        {children}
      </div>
    </div>
  );
};

export default Page;
