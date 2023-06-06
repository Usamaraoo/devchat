import { useNavigate } from "react-router-dom";
import { avatars } from "../data/Avatars";
import { orange } from "../data/StyleGuide";
import { useState } from "react";
import SliderComp from "../components/SliderComp";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function Avatar() {
  const axiosPrivate = useAxiosPrivate();

  const [selectedAvt, setSelectedAvt] = useState("");
  const navigate = useNavigate();
  const selectedAvater = (name) => {
    setSelectedAvt(name);
  };
  const OnNext = async () => {
    try {
      const res = await axiosPrivate.patch("/api/user/set-avatar", {
        avatar: selectedAvt,
      });
      if (res.status === 200) {
        const avatar = await res.data;
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" md:mt-10 lg:mt-20">
        <h3 className="font-bold text-3xl tracking-wider py-8 text-center">
          Select your Avatar
        </h3>
        <SliderComp
          data={avatars}
          selectedAvater={selectedAvater}
          selectedAvt={selectedAvt}
        />
      </div>
      <div className="mt-20 text-end">
        <button onClick={OnNext} className={`bg${orange} px-6 py-1 rounded-lg`}>
          Next
        </button>
      </div>
    </div>
  );
}
