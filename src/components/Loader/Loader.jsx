import { Bars } from 'react-loader-spinner';

export function Loader({ onLoading }) {
  return (
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={onLoading}
    />
  );
}
