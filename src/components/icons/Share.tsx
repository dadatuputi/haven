import { SVGProps } from 'react';

const Share = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Icon'>
        <path
          id='vector'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5 7C5 5.89543 5.89543 5 7 5H12C12.2761 5 12.5 4.77614 12.5 4.5C12.5 4.22386 12.2761 4 12 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V15.75C20 15.4739 19.7761 15.25 19.5 15.25C19.2239 15.25 19 15.4739 19 15.75V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7ZM16.6772 4.14646C16.5342 4.00346 16.3192 3.96068 16.1323 4.03807C15.9455 4.11547 15.8237 4.29778 15.8237 4.50001V6.74638H15.4082C12.9054 6.74638 11.3881 8.01894 10.4051 9.61626C9.63795 10.8629 9.17459 12.3489 8.7941 13.5691L8.79409 13.5691C8.70073 13.8685 8.61235 14.152 8.5257 14.4119C8.45482 14.6245 8.53411 14.8584 8.71972 14.984C8.90532 15.1097 9.15187 15.0965 9.32299 14.9517C9.71766 14.6178 10.0632 14.3178 10.3738 14.048C11.1461 13.3775 11.7028 12.8941 12.2632 12.5426C12.9963 12.0829 13.7191 11.8659 14.9505 11.8659H15.8237V14.1123C15.8237 14.3189 15.9507 14.5042 16.1434 14.5787C16.3361 14.6531 16.5547 14.6015 16.6937 14.4486L21.2709 9.41363C21.4505 9.21614 21.4432 8.91246 21.2545 8.72373L16.6772 4.14646ZM16.8237 7.24638V5.70712L20.2103 9.09372L16.8237 12.819V11.3659C16.8237 11.0898 16.5998 10.8659 16.3237 10.8659H14.9505C13.5656 10.8659 12.6511 11.119 11.7319 11.6954C11.1977 12.0304 10.655 12.482 10.0125 13.037C10.3328 12.0505 10.7073 11.0333 11.2568 10.1404C12.1047 8.76245 13.3338 7.74638 15.4082 7.74638H16.3237C16.5998 7.74638 16.8237 7.52252 16.8237 7.24638Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

export default Share;
