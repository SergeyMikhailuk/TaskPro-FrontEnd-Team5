import { Link } from 'react-router-dom';
import {
  Overlay,
  OverlayTitleError,
  OverlayTitleErrorAccent,
  OverlayLinks,
} from './styled';

const ErrorBackEnd = () => {
  return (
    <Overlay>
      <OverlayTitleError>
        <>Ups! Error: </>
        <OverlayTitleErrorAccent>{<>Error 404</>}</OverlayTitleErrorAccent>
      </OverlayTitleError>
      <OverlayLinks>
        <Link to="/">Home</Link>
      </OverlayLinks>
    </Overlay>
  );
};

export default ErrorBackEnd;
