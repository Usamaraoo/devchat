import { Link } from "react-router-dom";
import { graylight } from "../data/StyleGuide";
import { defaultDevImg } from "../data/defaultData";

export default function Comments(props) {
  const { comment, userName, userImg, time } = props;
  return (
    <div className={` h-fit bg${graylight}  px-4 py-5 my-5 rounded-sm  `}>
      <div className="flex gap-2 mb-2 items-start">
        <img
          className="rounded-full w-8 "
          src={userImg ? userImg : defaultDevImg}
          alt="user"
        />
        <div>
          <Link to={`/dev/${userName}`} className=" flex gap-2 items-center">
            <p className="font-medium text-sm">{userName}</p>
            <small className="text-xs text-gray-300">{time}</small>
          </Link>
          <p>
            {comment}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dolorem hic deleniti earum minus. Consequatur facere, impedit vel
            nihil ea odit atque tempore? Voluptatum nemo repellat accusamus
            quaerat facere
          </p>
        </div>
      </div>
    </div>
  );
}
