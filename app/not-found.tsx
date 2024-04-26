'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="">
      <h1 className="mb-8">Oops!</h1>
      <p className="mb-32">Something went wrong!</p>
      <p className="">Please <a href="#" className="text-light-text underline hover" onClick={() => window.location.reload()}>click here</a> to refresh the page or contact us at info@linkta.org</p>
    </div>
  )
}
