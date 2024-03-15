import { ThreeCircles } from 'react-loader-spinner';

import { Overlay, LoaderSpinner } from './styled';

const Loader = () => {
  return (
    <Overlay>
      <LoaderSpinner>
        <ThreeCircles
          visible={true}
          color="#9DC888"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </LoaderSpinner>
    </Overlay>
  );
};

export default Loader;
