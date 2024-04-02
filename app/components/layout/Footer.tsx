import { footerLinks } from './layoutConfig';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div>©2024 Linkta L.L.C. All rights reserved.</div>
      <ul>
        {footerLinks.map((tab) => (
          <li key={`${tab.path}-${tab.tabname}`}>
            <Link href={tab.path}>{tab.tabname}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
