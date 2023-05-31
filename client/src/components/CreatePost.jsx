import { graylight, orange } from "../data/StyleGuide";
import { useState } from "react";
import Modal from "./Modal";
export default function CreatePost() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div
      className={` w-4/5 m-auto bg${graylight} rounded-md   p-3  my-4`}
      onClick={() => setOpenModal(!openModal)}
    >
      <p className="text-sm text-gray-300">What's on your mind?</p>
      {openModal && (
        <Modal>
          <textarea
            className={`w-full   bg${graylight}`}
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
