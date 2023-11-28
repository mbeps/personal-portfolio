import Button from "@/components/Atoms/Button";
import React from "react";
import { MdClear } from "react-icons/md";

type CloseFilterModalButtonProps = {
  handleCloseModals: () => void;
};

/**
 * Button to close the filter modal.
 * This button is specific to the modals from pages that use filters.
 * @param handleCloseModals () => void - function to close modals
 * @returns (JSX.Element) - button to close filter modal
 */
const CloseFilterModalButton: React.FC<CloseFilterModalButtonProps> = ({
  handleCloseModals,
}) => {
  return (
    <Button variant="filled" onClick={handleCloseModals} className="w-full">
      <div className="flex items-center justify-center space-x-2">
        <MdClear fontSize={24} />
        <span>Close</span>
      </div>
    </Button>
  );
};
export default CloseFilterModalButton;
