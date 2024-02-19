import NotFoundImg from '../Images/NotFound.png';

function NotFound() {
  return (
    <div className='notFoundPage'>
      <img className="notFoundImg" src={NotFoundImg} alt="Description" />
    </div>
  );
}

export default NotFound;
