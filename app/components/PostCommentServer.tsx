import supabase from "@/lib/db";
import { revalidatePath } from "next/cache";
import React from "react";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";

export default async function PostCommentServer({ postId }: { postId: any }) {
  const { data: comentario, error } = await supabase
    .from("Comentarios")
    .select("*")
    .eq("postId", postId)
    .order("created_at", { ascending: false });
  return (
    <div>
      <div className="p-8 rounded-lg shadow-2xl mt-10">
        <h3 className="text-2xl font-bold text-white mb-4">Comentarios</h3>
        <div className="flex flex-col gap-4">
          {comentario?.map((comentario) => (
            <div
              key={comentario.id}
              className="flex items-start border-b border-gray-700 last:border-0 p-4"
            >
              <div className="flex-shrink-0 mr-4">
                <Image
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover bg-gray-500"
                  alt="Avatar"
                  src="https://ilqdcaxghgdguijztgpb.supabase.co/storage/v1/object/public/images/2815428.png?t=2024-02-13T21%3A31%3A10.965Z" // Replace with actual avatar or placeholder
                />
              </div>
              {/* Comment details */}
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-white mb-1">
                  {comentario.nombre}
                </p>
                <p className="text-sm text-yellow-400 mb-2">
                  {getFormattedDate(comentario.created_at)}
                </p>
                <p className="text-gray-300 mb-2">{comentario.email}</p>
                <p className="text-gray-200">{comentario.comentario}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
