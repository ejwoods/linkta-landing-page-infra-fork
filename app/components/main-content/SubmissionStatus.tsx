import {useRef, useEffect} from 'react';
import heartAnimationData from "../../../public/lottiefiles/heart.json";
import mailAnimationData from "../../../public/lottiefiles/mail-plane.json";
export default function SubmissionStatus() {
  const linktaEmail = 'info@linkta.org';
  const heartRef = useRef<any>(null);
  const mailRef = useRef<any>(null);

  useEffect(() => {
    const loadLottieFiles = async () => {
      await import("@lottiefiles/lottie-player");
      if (heartRef.current) {
        heartRef.current.load(JSON.stringify(heartAnimationData));
      }
      if (mailRef.current) {
        mailRef.current.load(JSON.stringify(mailAnimationData));
      }
    };
    loadLottieFiles();
  }, []);
  return (
    <article aria-live="polite">
      <h1>Thank you!</h1>
      <div><lottie-player
          id="flyingHeart"
          ref={heartRef}
          autoplay
          loop
          mode="normal"
          src={heartAnimationData}
          style={{ width: "50px", height: "50px" }}
        ></lottie-player></div>
      <p>We&apos;re thrilled to have you join us on this exciting journey!</p>
      <p>(Our demo is almost ready, and we can&apos;t wait for you to experience it firsthand.)</p>
      <div><lottie-player
          id="flyingMail"
          ref={mailRef}
          autoplay
          loop
          mode="normal"
          src={mailAnimationData}
          style={{ width: "300px", height: "300px" }}
        ></lottie-player></div>
      <p>Keep an eye on your inbox for an <strong>exclusive invitation</strong> coming your way soon!</p>
      <p>Got questions? We&apos;re here to help! Shoot us an email at <a href={`mailto:${linktaEmail}`}>{linktaEmail}</a></p>
    </article>
  )
}
