import { SVGProps } from 'react';

import s from './Ban.module.scss';

const Pin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={s.root}
    {...props}
    width='20'
    height='20'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>Pin</title>
    <path d='M0.502445 19.7802C0.807111 19.6471 1.09178 19.4927 1.36711 19.3429L1.44333 19.3016L4.97889 15.7787C5.06222 15.6962 5.14511 15.6129 5.22778 15.5298C5.376 15.3807 5.52444 15.2316 5.67622 15.086L5.99556 14.7618L11.1771 19.9431L11.5558 19.5644C13.5807 17.5398 14.3376 14.47 13.5022 11.7082L14.9153 10.2949C16.6498 10.4658 18.402 9.84667 19.6209 8.62756L20 8.24956L11.7507 0L11.372 0.379111C10.1527 1.59844 9.534 3.34978 9.70467 5.08489L8.29133 6.49822C5.53 5.66311 2.46 6.41978 0.435333 8.44444L0.0566659 8.82289L5.238 14.0042L4.914 14.3238C4.76889 14.4747 4.62044 14.6224 4.472 14.7702C4.38889 14.8531 4.30578 14.9358 4.224 15.0184L0.735111 18.5071L0.656889 18.6329C0.507333 18.9082 0.352666 19.1929 0.219555 19.4976L-1.49012e-07 20L0.502445 19.7802Z' fill='var(--cyan)'/>
  </svg>
);

export default Pin;

