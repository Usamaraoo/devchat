import {
  grayDark,
  graylight,
  hoverTextOrange,
  orange,
} from "../data/StyleGuide";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
export default function CreatePost() {
  const [openModal, changeModalState] = useModal();
  return (
    <div className={` w-4/5 m-auto bg${graylight} rounded-md   p-3  my-4`}>
      <p
        onClick={changeModalState}
        className={`text-sm text-gray-300 ${hoverTextOrange}`}
      >
        What's on your mind?
      </p>
      {openModal && (
        <Modal changeModalState={changeModalState} openModal={openModal}>
          <textarea
            className={`w-full  p-2 bg${grayDark}`}
            name="post"
            id=""
            placeholder="Start writing..."
            rows="10"
          ></textarea>
          <div className="text-right py-3">
            <button
              className={`bg${orange} px-4 py-1 rounded-lg font-medium tracking-wider `}
            >
              Write
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
