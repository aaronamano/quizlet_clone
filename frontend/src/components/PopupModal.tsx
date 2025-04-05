import { ReactNode } from "react";

type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  closeOnOutsideClick?: boolean;
};

function PopupModal({
  isOpen,
  onClose,
  title,
  children,
  closeOnOutsideClick = true,
}: PopupModalProps) {
  function handleOutsideClick(e: React.MouseEvent) {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        onClick={handleOutsideClick}
      >
        <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">{children}</div>
          <div className="flex justify-end gap-2 border-t p-4">
            <button
              onClick={onClose}
              className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupModal;
