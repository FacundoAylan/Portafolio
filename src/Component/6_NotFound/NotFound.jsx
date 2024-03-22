import { useNavigate } from 'react-router-dom';
import './index.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container-NotFound">
      <button onClick={() => navigate('/')} className="button-NotFound">
        Back Home
      </button>
    </div>
  );
};

export default NotFound;
