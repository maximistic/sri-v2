// src/ErrorPage.jsx

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="/assets/error.gif" alt="Error GIF" className="mb-4 w-64 h-64" />
      <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="mt-2 text-gray-600">We are sorry, but the page you were looking for does not exist.</p>
      <a
        href="/"
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
