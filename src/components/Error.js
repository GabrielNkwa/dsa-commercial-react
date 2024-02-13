import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center j-screen">
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl  ">
          Error 404 | Page Not Found
        </h1>

        <Link
          to="/"
          className="py-2 py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold mb-5"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
