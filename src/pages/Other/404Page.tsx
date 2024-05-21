import { Link } from 'react-router-dom';
import LOGO from '../../assets/MMJ_LOGO.svg';

const Page404 = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="rounded-lg p-8 flex flex-col items-center text-center">
        <img src={LOGO} alt="LOGO" className='mb-5' />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">Oops! The page you're looking for could not be found.</p>
        <Link to="/" replace={true} className="inline-flex items-center px-4 py-2 rounded bg-primaryGreen font-semibold hover:bg-secondaryBlue">
          Go Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Page404;
