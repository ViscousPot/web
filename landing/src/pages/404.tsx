import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRefresh } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-[#2E261F] px-6 py-4 text-white md:px-8 md:py-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-black text-[#EBDAC6] md:text-9xl">
          404
        </h1>
        <h2 className="mb-6 text-2xl font-semibold md:text-4xl">
          Page Not Found
        </h2>
        <p className="text-md mb-8 max-w-md text-[#D4BDA1] md:text-xl">
          Oops! The page you're looking for seems to have wandered off into the digital wilderness.
        </p>

        <div className="flex gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#26211C] px-6 py-3 text-white transition-all hover:scale-105 hover:bg-[#26211C]/80"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Go Home
          </a>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-full bg-[#26211C] px-6 py-3 text-white transition-all hover:scale-105 hover:bg-[#26211C]/80"
          >
            <FontAwesomeIcon icon={faRefresh} className="mr-2" />
            Refresh
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Page Not Found</title>;
