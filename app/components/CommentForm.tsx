// components/CommentForm.tsx
import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import PostCommentServer from "./PostCommentServer";
import supabase from "@/lib/db";
import { revalidatePath } from "next/cache";

const CommentForm = ({ postId }: { postId: any }) => {
  const articuloId = postId;
  async function comment(formData: FormData) {
    "use server";
    const nombre = formData.get("name") as String;
    const email = formData.get("email") as String;
    const comentario = formData.get("comentario") as String;
    const { data, error } = await supabase
      .from("Comentarios")
      .insert({ nombre, email, comentario, articuloId })
      .select();
    if (data) {
      revalidatePath(`/posts/${articuloId}`);
    } else {
      console.log(error);
    }
  }
  return (
    <div>
      <h3>
        <span className="border-b border-yellow-500">
          ¿Qué te parece este artículo?
        </span>
      </h3>
      <form action={comment} className="mt-6">
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
      <PostCommentServer articuloId={articuloId} />
    </div>
  );
};

export default CommentForm;
