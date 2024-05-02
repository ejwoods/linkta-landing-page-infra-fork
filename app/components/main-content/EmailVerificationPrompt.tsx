'use client'

export default function EmailVerificationPrompt() {
  const linktaEmail = 'info@linkta.org';

  return (

    <article aria-live="polite">
    <section>
    <p className="pt-4 text-lg">
      Thank you for signing up on linkta.io! 
      <br/>
      To complete the sign-up process and verify your email address, please check your inbox on the same device you used to sign up.
      You should have received an email from us with a verification link. If you don’t see the email in your inbox, please check your spam or junk folder. 
      If you still can’t find it, feel free to reach out to <a href={`mailto:${linktaEmail}`}>{linktaEmail}</a> for further assistance.
    </p>
    </section>
    </article>
  )
}
