import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader({ onLoading }) {
  return (
    <Bars
      height="50"
      width="60"
      color="black"
      ariaLabel="bars-loading"
      wrapperClass={css.testClass}
      wrapperStyle={{
        display: 'block',
        marginTop: '70px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      visible={onLoading}
    />
  );
}
