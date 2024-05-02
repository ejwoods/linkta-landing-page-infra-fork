import heartAnimationData from '../../../public/lottiefiles/heart.json';
import mailAnimationData from '../../../public/lottiefiles/mail-plane.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const ThankYou = () => {
  const linktaEmail = 'info@linkta.org';

  return (
    <article aria-live="polite">
      <h1 className="flex h-[60px] pt-4 align-bottom">
        <span className="align-text-bottom">Thank you!</span>
        <Player
          autoplay
          loop={false}
          src={heartAnimationData}
          style={{
            width: '50px',
            height: '50px',
            background: 'transparent',
            fillOpacity: '0',
          }}
        >
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </h1>
      <section>
        <p className="pt-4 text-lg">
          We&apos;re thrilled to have you join us on this exciting journey!
        </p>
        <p className="pt-2 text-xs">
          (Our demo is almost ready, and we can&apos;t wait for you to
          experience it firsthand.)
        </p>
      </section>
      <div>
        <Player
          autoplay
          loop={true}
          src={mailAnimationData}
          style={{ width: '300px', height: '300px' }}
        >
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </div>
      <section>
        <p>
          If you&apos;d like to keep up with the project,{' '}
          <a
            href="https://www.linkedin.com/company/100947448/"
            target="_blank"
          >
            follow us on LinkedIn!
          </a>
        </p>
      </section>
      <section>
        <p className="text-lg">
          Keep an eye on your inbox for an <strong>exclusive invitation</strong>{' '}
          coming your way soon!
        </p>
        <p className="absolute bottom-10 text-xs">
          Got questions? We&apos;re here to help! Shoot us an email at{' '}
          <a href={`mailto:${linktaEmail}`}>{linktaEmail}</a>
        </p>
      </section>
    </article>
  );
};

export default ThankYou;
