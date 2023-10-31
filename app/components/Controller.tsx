
interface ControllerProps {
  currentSliceStart: number;
  currentSliceEnd: number;
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  totalItems: number;
}

const Controller: React.FC<ControllerProps> = ({
  currentSliceStart,
  currentSliceEnd,
  currentPage,
  nextPage,
  previousPage,
  totalItems,
}) => {
  return (
    <div className="text-white flex gap-6 items-center justify-center">
      {currentSliceStart >= 4 && (
        <button
          onClick={previousPage}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-200 px-4 py-2 rounded-lg"
        >
          ◀
        </button>
      )}
      <span className="text-xl font-bold">{currentPage}</span>
      {currentSliceEnd < totalItems && (
        <button
          onClick={nextPage}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-200 px-4 py-2 rounded-lg"
        >
        ▶
        </button>
      )}
    </div>
  );
};

export default Controller;
