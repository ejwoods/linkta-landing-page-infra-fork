import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col m-auto">
      <h2 className="font-bold flex flex-col m-auto">Error 404</h2>
      <p>Oops! This page was not found</p>
      <button className="border-2">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  )
}
