import { grayDark, orange } from "../data/StyleGuide";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState } from "react";
export default function WriteComment({ postId,updateComments }) {
  const axiosPrivate = useAxiosPrivate();

  const [comment, setComment] = useState("");
  const addComment = async (e) => {
    try {
      e.preventDefault();
      if (comment.length > 10) {
        const res = await axiosPrivate.post("/api/post-comment", {
          comment,
          postId,
        });
        if (res.status === 200) {
          setComment("");
          // updating comments state on new comment
          updateComments(res.data)
          }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full relative ">
      <form onSubmit={addComment}>
        <textarea
          rows={2}
          type="text"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className={`w-full  p-2 bg-gray-800 py-2 pr-20`}
          placeholder="Write a comment"
        />
        <button
          type="submit"
          className={`bg${orange} rounded-full px-4 absolute right-3 bottom-3`}
        >
          Post
        </button>
      </form>
    </div>
  );
}
