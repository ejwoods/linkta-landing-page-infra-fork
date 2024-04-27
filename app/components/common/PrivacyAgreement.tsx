import Link from "next/link";

export default function PrivacyAgreement() {
  return (
    <div className="text-xs">
      By continuing you are agreeing to our <Link href="/legal">Terms of Service</Link>
      {/* and to our <Link href="/privacy-policy">Privacy Policy</Link> */}
    </div>
  );
}