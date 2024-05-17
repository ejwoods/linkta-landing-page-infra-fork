import { footerLinks } from './layoutConfig';
import Link from 'next/link';

export default function Footer() {
  return (
      <div className="linkta-footer fixed bottom-0 w-full border-t-2 pt-1 text-center text-light-text bg-[#F8F8F8]">
        <span className="">
        ©2024 Linkta L.L.C. All rights reserved.
        </span>

      <ul className="flex place-content-evenly hidden">
        {footerLinks.map((tab) => (
          <li key={`${tab.path}-${tab.tabname}`}>
            <Link href={tab.path} className="px-1 flex-1">{tab.tabname}</Link>
          </li>
        ))}
      </ul>
      </div>
  );
}
