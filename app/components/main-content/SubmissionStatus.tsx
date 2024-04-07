export default function SubmissionStatus() {
  const linktaEmail = 'info@linkta.org';

  return (
    <article aria-live="polite">
      <h1>Thank you!</h1>
      <div>animated heart placeholder</div>
      <p>We're thrilled to have you join us on this exciting journey!</p>
      <p>(Our demo is almost ready, and we can't wait for you to experience it firsthand.)</p>
      <div>green paper plane placeholder</div>
      <p>Keep an eye on your inbox for an <strong>exclusive invitation</strong> coming your way soon!</p>
      <p>Got questions? We’re here to help! Shoot us an email at <a href={`mailto:${linktaEmail}`}>{linktaEmail}</a></p>
    </article>
  )
}
