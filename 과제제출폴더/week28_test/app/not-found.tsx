import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-600">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="mt-2 text-gray-500">
        요청하신 프로젝트나 페이지가 존재하지 않습니다.
      </p>
      <Link
        href="/"
        className="px-4 py-2 mt-6 text-white transition bg-blue-600 rounded hover:bg-blue-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
