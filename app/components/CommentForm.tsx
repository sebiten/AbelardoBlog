// components/CommentForm.tsx
import supabase from "@/lib/db";
import getFormattedDate from "@/lib/getFormattedDate";
import React from "react";

const CommentForm = async (postId: any) => {
  console.log(postId.postId);

  const { data: comentario, error } = await supabase
    .from("Comentarios")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.log(error);
  }

  async function comment(formData: FormData) {
    "use server";
    const articuloId = postId.postId;
    const nombre = formData.get("name") as String;
    const email = formData.get("email") as String;
    const comentario = formData.get("comentario") as String;
    const { data, error } = await supabase
      .from("Comentarios")
      .insert({ nombre, email, comentario, articuloId })
      .select();
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  }

  return (
    <div>
      <form action={comment} className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          name="name"
          type="text"
          className="mt-1 p-2 border rounded-md w-full text-black"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Email:
        </label>
        <input
          name="email"
          type="email"
          className="mt-1 p-2 border rounded-md w-full text-black"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">
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
          className="mt-4 bg-yellow-400 text-white p-2 rounded-md hover:bg-yellow-500"
        >
          Submit Comment
        </button>
      </form>
      <div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Comentarios</h3>
            <div className="flex flex-col gap-4">
              {comentario?.slice(0, 4).map((comentario) => (
                <div key={comentario.id} className=" p-4 rounded-md shadow-2xl">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold mb-1">
                      {comentario.nombre}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {getFormattedDate(comentario.created_at)}
                    </p>
                    <p className="text-gray-700 mb-2">{comentario.email}</p>
                    <p className="text-sm mb-2">{comentario.comentario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
