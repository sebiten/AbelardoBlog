"use server";
import supabase from "@/lib/db";
import { revalidatePath } from "next/cache";

async function comment(formData: FormData, postId: any) {
  const nombre = formData.get("name") as String;
  const email = formData.get("email") as String;
  const comentario = formData.get("comentario") as String;
  const { data, error } = await supabase
    .from("Comentarios")
    .insert({ nombre, email, comentario, postId })
    .select();
  if (data) {
    console.log(data);
    revalidatePath(`/posts/${postId}`);
  } else {
    console.log(error);
  }
}

export default comment;
