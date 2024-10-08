import { SVGProps } from 'react';

import s from './Mute.module.scss';

const Pin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={s.root}
    {...props}
    width='21'
    height='20'
    viewBox='0 0 21 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.50245 19.7802C1.80711 19.6471 2.09178 19.4927 2.36711 19.3429L2.44333 19.3016L5.97889 15.7787C6.06222 15.6962 6.14511 15.6129 6.22778 15.5298C6.376 15.3807 6.52444 15.2316 6.67622 15.086L6.99555 14.7618L12.1771 19.9431L12.5558 19.5644C14.5807 17.5398 15.3376 14.47 14.5022 11.7082L15.9153 10.2949C17.6498 10.4658 19.402 9.84667 20.6209 8.62756L21 8.24956L12.7507 0L12.372 0.379111C11.1527 1.59844 10.534 3.34978 10.7047 5.08489L9.29133 6.49822C6.53 5.66311 3.46 6.41978 1.43533 8.44444L1.05667 8.82289L6.238 14.0042L5.914 14.3238C5.76889 14.4747 5.62044 14.6224 5.472 14.7702C5.38889 14.8531 5.30578 14.9358 5.224 15.0184L1.73511 18.5071L1.65689 18.6329C1.50733 18.9082 1.35267 19.1929 1.21955 19.4976L1 20L1.50245 19.7802Z'
      fill='currentColor'
    />
    <line
      x1='0.664364'
      y1='2.25259'
      x2='18.6644'
      y2='18.2526'
      stroke='currentColor'
      strokeWidth='2'
    />
  </svg>
);

export default Pin;
