import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ErrorMessage =(props)=>{

    const {error} = props;
  
    return(
  <div className='flex flex-col items-center justify-center'>

<FontAwesomeIcon icon={faTriangleExclamation} className='text-red-500 text-4xl' />
<div>Something went wrong! </div>
      <div>{error.error}</div>
  </div>
      
    );
  };
  
  export default ErrorMessage;