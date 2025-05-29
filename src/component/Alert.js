import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {
  return (
    <>
        {['dark'].map((variant) => (
        props.alert &&<Alert key={variant} variant={variant} className='container'>
          {props.alert.type} : {props.alert.message}
        </Alert>
      ))}
    </>
  );
}

export default AlertMessage;