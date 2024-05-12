export default function UserConsent() {
  return (
    <div className="mt-2 text-xs">
      By continuing you are agreeing to our{' '}
      <a
        href="/privacy-policy"
        className="text-light-secondary underline"
        aria-label="Read our privacy policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </div>
  );
}
