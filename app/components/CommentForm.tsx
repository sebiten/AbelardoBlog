// components/CommentForm.tsx
import React from "react";

const CommentForm = () => {
  async function comment(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <div>
      <form action={comment} className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          name="name"
          type="text"
          className="mt-1 p-2 border rounded-md w-full"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Email:
        </label>
        <input
          name="email"
          type="email"
          className="mt-1 p-2 border rounded-md w-full"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Comment:
        </label>
        <textarea
          name="comentario"
          className="mt-1 p-2 border rounded-md w-full"
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

      </div>
    </div>
  );
};

export default CommentForm;
