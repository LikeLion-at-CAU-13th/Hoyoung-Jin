"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2 mt-4 text-sm text-white transition bg-gray-600 rounded hover:bg-gray-700"
    >
      뒤로 가기
    </button>
  );
}
