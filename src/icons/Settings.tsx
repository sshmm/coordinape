import * as React from 'react';

import { styled, SvgIconConfig } from 'stitches.config';

import { IconProps } from 'types';

export const Settings = styled(
  React.forwardRef<SVGSVGElement, IconProps>(function Settings(
    { color = 'currentColor', ...props },
    forwardedRef
  ) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.00002 9.99996C9.10459 9.99996 10 9.10453 10 7.99996C10 6.89539 9.10459 5.99996 8.00002 5.99996C6.89545 5.99996 6.00002 6.89539 6.00002 7.99996C6.00002 9.10453 6.89545 9.99996 8.00002 9.99996Z"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9334 9.99996C12.8446 10.201 12.8181 10.4241 12.8574 10.6404C12.8966 10.8566 12.9997 11.0562 13.1534 11.2133L13.1934 11.2533C13.3173 11.3771 13.4157 11.5242 13.4828 11.686C13.5499 11.8479 13.5844 12.0214 13.5844 12.1966C13.5844 12.3718 13.5499 12.5453 13.4828 12.7072C13.4157 12.8691 13.3173 13.0161 13.1934 13.14C13.0695 13.2639 12.9225 13.3623 12.7606 13.4294C12.5987 13.4965 12.4252 13.531 12.25 13.531C12.0748 13.531 11.9013 13.4965 11.7394 13.4294C11.5776 13.3623 11.4305 13.2639 11.3067 13.14L11.2667 13.1C11.1096 12.9463 10.91 12.8432 10.6937 12.804C10.4775 12.7647 10.2544 12.7912 10.0534 12.88C9.85617 12.9645 9.68801 13.1048 9.56956 13.2836C9.45111 13.4625 9.38754 13.6721 9.38669 13.8866V14C9.38669 14.3536 9.24621 14.6927 8.99616 14.9428C8.74611 15.1928 8.40698 15.3333 8.05335 15.3333C7.69973 15.3333 7.36059 15.1928 7.11055 14.9428C6.8605 14.6927 6.72002 14.3536 6.72002 14V13.94C6.71486 13.7193 6.64343 13.5053 6.51503 13.3258C6.38662 13.1462 6.20718 13.0095 6.00002 12.9333C5.79894 12.8445 5.57589 12.8181 5.35963 12.8573C5.14336 12.8965 4.94381 12.9996 4.78669 13.1533L4.74669 13.1933C4.62286 13.3173 4.4758 13.4156 4.31394 13.4827C4.15208 13.5498 3.97857 13.5843 3.80335 13.5843C3.62813 13.5843 3.45463 13.5498 3.29277 13.4827C3.1309 13.4156 2.98385 13.3173 2.86002 13.1933C2.73605 13.0695 2.63771 12.9224 2.57061 12.7605C2.50351 12.5987 2.46897 12.4252 2.46897 12.25C2.46897 12.0747 2.50351 11.9012 2.57061 11.7394C2.63771 11.5775 2.73605 11.4305 2.86002 11.3066L2.90002 11.2666C3.05371 11.1095 3.15681 10.9099 3.19602 10.6937C3.23524 10.4774 3.20876 10.2544 3.12002 10.0533C3.03551 9.85611 2.89519 9.68795 2.71633 9.5695C2.53747 9.45105 2.32788 9.38748 2.11335 9.38663H2.00002C1.6464 9.38663 1.30726 9.24615 1.05721 8.9961C0.807163 8.74605 0.666687 8.40691 0.666687 8.05329C0.666687 7.69967 0.807163 7.36053 1.05721 7.11048C1.30726 6.86044 1.6464 6.71996 2.00002 6.71996H2.06002C2.28068 6.7148 2.49469 6.64337 2.67422 6.51497C2.85375 6.38656 2.9905 6.20712 3.06669 5.99996C3.15543 5.79888 3.1819 5.57583 3.14269 5.35957C3.10348 5.1433 3.00038 4.94375 2.84669 4.78663L2.80669 4.74663C2.68272 4.6228 2.58437 4.47574 2.51727 4.31388C2.45018 4.15202 2.41564 3.97851 2.41564 3.80329C2.41564 3.62807 2.45018 3.45457 2.51727 3.29271C2.58437 3.13084 2.68272 2.98379 2.80669 2.85996C2.93052 2.73599 3.07757 2.63765 3.23943 2.57055C3.4013 2.50345 3.5748 2.46891 3.75002 2.46891C3.92524 2.46891 4.09874 2.50345 4.26061 2.57055C4.42247 2.63765 4.56952 2.73599 4.69335 2.85996L4.73335 2.89996C4.89047 3.05365 5.09003 3.15675 5.30629 3.19596C5.52256 3.23517 5.74561 3.2087 5.94669 3.11996H6.00002C6.1972 3.03545 6.36537 2.89513 6.48382 2.71627C6.60227 2.53741 6.66583 2.32782 6.66669 2.11329V1.99996C6.66669 1.64634 6.80716 1.3072 7.05721 1.05715C7.30726 0.807102 7.6464 0.666626 8.00002 0.666626C8.35364 0.666626 8.69278 0.807102 8.94283 1.05715C9.19288 1.3072 9.33335 1.64634 9.33335 1.99996V2.05996C9.33421 2.27448 9.39778 2.48408 9.51623 2.66294C9.63468 2.8418 9.80284 2.98212 10 3.06663C10.2011 3.15537 10.4241 3.18184 10.6404 3.14263C10.8567 3.10342 11.0562 3.00032 11.2134 2.84663L11.2534 2.80663C11.3772 2.68266 11.5242 2.58431 11.6861 2.51721C11.848 2.45011 12.0215 2.41558 12.1967 2.41558C12.3719 2.41558 12.5454 2.45011 12.7073 2.51721C12.8691 2.58431 13.0162 2.68266 13.14 2.80663C13.264 2.93046 13.3623 3.07751 13.4294 3.23937C13.4965 3.40124 13.5311 3.57474 13.5311 3.74996C13.5311 3.92518 13.4965 4.09868 13.4294 4.26055C13.3623 4.42241 13.264 4.56946 13.14 4.69329L13.1 4.73329C12.9463 4.89041 12.8432 5.08997 12.804 5.30623C12.7648 5.5225 12.7913 5.74555 12.88 5.94663V5.99996C12.9645 6.19714 13.1049 6.3653 13.2837 6.48375C13.4626 6.60221 13.6722 6.66577 13.8867 6.66663H14C14.3536 6.66663 14.6928 6.8071 14.9428 7.05715C15.1929 7.3072 15.3334 7.64634 15.3334 7.99996C15.3334 8.35358 15.1929 8.69272 14.9428 8.94277C14.6928 9.19282 14.3536 9.33329 14 9.33329H13.94C13.7255 9.33415 13.5159 9.39771 13.337 9.51616C13.1582 9.63461 13.0179 9.80278 12.9334 9.99996Z"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }),
  SvgIconConfig
);
Settings.displayName = 'Settings';
export default Settings;
