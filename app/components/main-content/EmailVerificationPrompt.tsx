'use client'

export default function EmailVerificationPrompt() {
  const linktaEmail = 'info@linkta.org';

  return (
    <section aria-live="polite" className="pt-8 pr-6 text-light-text">
    <h4 className="py-4 text-xl font-bold">Thank you for signing up on linkta.io!</h4> 
      <p className="py-4 text-xl "><strong>To complete</strong> the sign-up process and verify your email address, please check your inbox on <strong>the same device </strong>you used to sign up.</p>
      <section className="pt-2">
        <p className="py-3">You should have received an email from us with a <strong>verification link</strong>.</p> 
        <p>If you don’t see the email in your inbox, please check your spam or junk folder. </p>
        <p className="pt-3">If you still can’t find it, feel free to reach out to <a href={`mailto:${linktaEmail}`} className="underline decoration-light-link font-semibold">{linktaEmail}</a> for further assistance.
        </p>
      </section>
    </section>
  )
}
