const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-16 h-16">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-heartBeat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 70"
              width="60"
              height="60"
            >
              <path
                d="M50 91s-2-1-3-3c-7-6-23-20-35-30C4 50-1 40 1 30 3 22 8 15 17 11c6-3 13-2 18 1 3 1 6 4 8 6 2-2 5-5 8-6 5-3 12-4 18-1 9 4 14 11 16 19 2 10-1 20-7 28-12 10-28 24-35 30-1 2-3 3-3 3z"
                fill="#e90c59"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
