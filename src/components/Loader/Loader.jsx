import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader({ onLoading }) {
  return (
    <ThreeDots
      visible={onLoading}
      height="80"
      width="80"
      color="black"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'block',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass={css.testClass}
    />
    // <Bars
    //   height="50"
    //   width="60"
    //   color="black"
    //   ariaLabel="bars-loading"
    //   wrapperClass={css.testClass}
    //   wrapperStyle={{
    //     display: 'block',
    //     marginTop: '50px',
    //     marginBottom: '50px',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //   }}
    //   visible={onLoading}
    // />
  );
}
