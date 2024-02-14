"use client";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import PostCommentServer from "./PostCommentServer";
import comment from "../action";
const CommentForm = ({ postId }: { postId: any }) => {
  const ref = useRef<HTMLFormElement>(null);
  const articuloId = postId;

  return (
    <div>
      <h3>
        <span className="border-b border-yellow-500">
          ¿Qué te parece este artículo?
        </span>
      </h3>
      <form
        ref={ref}
        action={async (formData) => {
          await comment(formData, articuloId);
          toast.success("Se ha agregado el comentario🎊");
          // reseteamos form
          ref.current?.reset();
        }}
        className="mt-6"
      >
        <label className="block text-sm font-medium text-white">Name:</label>
        <input
          name="name"
          type="text"
          className="mt-1 p-2 border rounded-md w-full text-black"
          required
        />

        <label className="block text-sm font-medium text-white mt-4">
          Email:
        </label>
        <input
          name="email"
          type="email"
          className="mt-1 p-2 border rounded-md w-full text-black"
          required
        />

        <label className="block text-sm font-medium text-white mt-4">
          Comment:
        </label>
        <textarea
          name="comentario"
          className="mt-1 p-2 border rounded-md w-full text-black"
          rows={4}
          required
        />

        <button
          type="submit"
          className="mt-4  font-bold bg-transparent border text-white p-2 rounded-md hover:bg-yellow-500"
        >
          <span className="border-b flex items-center justify-center gap-1 border-yellow-500">
            Enviar comentario
            <IoMdMail className={`hover:`} size={26} />
          </span>
        </button>
      </form>
      <PostCommentServer postId={postId} />
    </div>
  );
};

export default CommentForm;
