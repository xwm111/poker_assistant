const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative rounded-lg bg-white p-6">
            <button
              onClick={onClose}
              className="absolute right-0 top-0 m-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
