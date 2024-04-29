import Image from 'next/image';
export default function LinktaLogoWithText() {
  return (
    <figure className="flex ml-2 hidden">
      <Image
        src="/linkta-logo-transparent.svg"
        width={50}
        height={50}
        alt="Linkta Logo"
      />
      <figcaption id="linkta-title" className="font-semibold content-end">Linkta</figcaption>
    </figure>
  );
}
