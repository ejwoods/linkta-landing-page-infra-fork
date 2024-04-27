'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="">
      <h2 className="mb-4 text-3xl font-semibold">Oops!</h2>
      <p className="mb-64">Something went wrong!</p>
      <p className="mb-32">Please <a href="/" className="text-light-text underline hover">click here</a> to return home or contact us at info@linkta.org</p>
    </div>
  )
};
