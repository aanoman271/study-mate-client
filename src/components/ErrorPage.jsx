import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-base-200 text-base-content">
      <div className="text-center p-8 max-w-lg bg-base-100 rounded-xl shadow-2xl">
        <BiErrorCircle className="text-error mx-auto mb-6" size={80} />

        <h1 className="text-8xl font-extrabold text-error mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>

        <p className="text-lg text-base-content/80 mb-8">
          Oops! The study material you were looking for seems to be missing. It
          might have been moved or doesn't exist.
        </p>

        <Link to="/" className="btn btn-primary btn-wide mt-4 shadow-lg">
          Go Back Home
        </Link>

        <p className="text-sm mt-4">
          Or check our{" "}
          <Link to="/find-partners" className="link link-hover text-primary">
            Find Partners
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
