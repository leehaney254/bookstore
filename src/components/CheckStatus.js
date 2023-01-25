import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './CheckStatus.css';

function CheckStatus() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoryReducer);
  let display = '';

  const statusChangeHandler = () => {
    dispatch(checkStatus());
  };

  if (status === '') {
    display = <button id="checkStatus" onClick={statusChangeHandler} type="button">CheckStatus</button>;
  } else {
    display = <>{status}</>;
  }

  return (
    <div>
      {display}
    </div>
  );
}

export default CheckStatus;
