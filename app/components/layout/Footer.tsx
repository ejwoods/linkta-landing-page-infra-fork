import { footerLinks } from './layoutConfig';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="flex justify-center pt-2 px-10">
        <span className="justify-start flex-grow">
        ©2024 Linkta L.L.C. All rights reserved.
        </span>
     
      <ul className="flex place-content-evenly">
        {footerLinks.map((tab) => (
          <li key={`${tab.path}-${tab.tabname}`}>
            <Link href={tab.path} className="px-1 flex-1">{tab.tabname}</Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
