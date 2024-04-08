import Image from 'next/image';
export default function LinktaLogoWithText() {
  return (
    <figure>
      <Image
        src="/linkta-logo-gray.svg"
        width={50}
        height={50}
        alt="Linkta Logo"
      />
      <figcaption id="linkta-title">Linkta</figcaption>
    </figure>
  );
}
