'use client'
import heartAnimationData from "../../../public/lottiefiles/heart.json";
import mailAnimationData from "../../../public/lottiefiles/mail-plane.json";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function SubmissionStatus() {
  const linktaEmail = 'info@linkta.org';
  
  return (
    <article aria-live="polite">
      <h1>Thank you!</h1>
      <div><Player
          autoplay
          loop={false}
          src={heartAnimationData}
          style={{ width: "50px", height: "50px" }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player></div>
      <p className="pt-4 text-lg">We&apos;re thrilled to have you join us on this exciting journey!</p>
      <p className="text-xs pt-2">(Our demo is almost ready, and we can&apos;t wait for you to experience it firsthand.)</p>
      <div>
        <Player
          autoplay
          loop={true}
          src={mailAnimationData}
          style={{ width: "300px", height: "300px" }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        
        </div>
      <p className="text-lg">Keep an eye on your inbox for an <strong>exclusive invitation</strong> coming your way soon!</p>
      <p className="absolute bottom-10 text-xs">Got questions? We&apos;re here to help! Shoot us an email at <a href={`mailto:${linktaEmail}`}>{linktaEmail}</a></p>
    </article>
  )
}
