import { useNavigate } from "react-router-dom";
import { avatars } from "../data/Avatars";
import { orange } from "../data/StyleGuide";
import { useState } from "react";
export default function Avatar() {
  const [selectedAvt, setSelectedAvt] = useState("");
  const selectedClasses =
    "border-4 border-orange-400 opacity-100 shadow-md shadow-orange-300 -translate-y-3";
  const navigate = useNavigate();
  const selectedAvater = (name) => {
    setSelectedAvt(name);
  };
  const OnNext = () => {
    navigate("/profile");
  };

  return (
    <div>
      <h3 className="font-bold text-3xl tracking-wider py-8 text-center">
        Select your Avatar
      </h3>
      <div className="flex justify-center mt-5 gap-11">
        {avatars &&
          avatars.map((av) => {
            const { id, img, name } = av;
            return (
              <div
                onClick={() => selectedAvater(name)}
                key={id}
                className={` w-40 bg-gray-700 hover:-translate-y-5 
                transition-all hover:shadow-lg hover:shadow-orange-300 rounded 
                overflow-hidden hover:text-orange-300  opacity-60 hover:opacity-100
                 cursor-pointer duration-500 ${
                   selectedAvt === name && selectedClasses
                 }
                 `}
              >
                <img src={img} alt={name} className="min-w-full" />
                <p className="text-center tracking-wider text-xl font-medium p-2 ">
                  {name}
                </p>
              </div>
            );
          })}
      </div>

      {/* Next */}
      <div className="mt-20 text-end">
        <button onClick={OnNext} className={`bg${orange} px-6 py-1 rounded-lg`}>
          Next
        </button>
      </div>
    </div>
  );
}
