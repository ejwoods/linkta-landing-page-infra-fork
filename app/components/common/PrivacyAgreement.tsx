import Link from "next/link";

export default function PrivacyAgreement() {
  return (
    <div className="text-xs mt-2">
      By continuing you are agreeing to our <a href="https://www.privacypolicies.com/live/40b69adf-2fb3-416e-b85c-c9ae02378cd7">Terms of Service</a>
      {/* and to our <Link href="/privacy-policy">Privacy Policy</Link> */}
    </div>
  );
}