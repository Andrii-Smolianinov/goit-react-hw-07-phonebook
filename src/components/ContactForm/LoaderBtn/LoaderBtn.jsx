import { Bars } from 'react-loader-spinner';
import { LoaderBtn } from 'components/ContactForm/LoaderBtn/LoaderBtnStyled'


export const LoaderButton = () => {
  return (
    <LoaderBtn>
      <Bars
        ariaLabel="bars-loading"
        height={20}
        width={20}        
        color="#b1c5f1"
      />
    </LoaderBtn>
  );
};

