import { graylight, orange } from "../data/StyleGuide";

export default function Modal(props) {
  return (
    <div>
      {/* modal bg */}
      <div className="modal-bg"></div>
      <div className="modal  m-auto bg-gray-800">{props.children}</div>
    </div>
  );
}
