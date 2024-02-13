"use server";
import { revalidatePath } from "next/cache";
import supabase from "./db";

async function comment(formData: FormData, articuloId: any) {
  const nombre = formData.get("name") as String;
  const email = formData.get("email") as String;
  const comentario = formData.get("comentario") as String;
  const { data, error } = await supabase
    .from("Comentarios")
    .insert({ nombre, email, comentario, articuloId })
    .select();
  if (data) {
    console.log(data);
    revalidatePath(`/posts/${articuloId}`);
  } else {
    console.log(error);
  }
}

export default comment;
