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
    display = <button className="primaryButton" onClick={statusChangeHandler} type="button">Check Status</button>;
  } else {
    display = <h1>{status}</h1>;
  }

  return (
    <div id="container">
      {display}
    </div>
  );
}

export default CheckStatus;
