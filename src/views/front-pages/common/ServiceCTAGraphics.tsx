'use client'

// Service CTA Phone Icon SVG Component
export const ServiceCTAPhoneIcon = () => {
  return (
    <svg width='180' height='180' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id='gradStroke' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stopColor='#0db6c8' />
          <stop offset='100%' stopColor='#008796' />
        </linearGradient>
        <radialGradient id='nodeGlow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='#0ff' stopOpacity='0.9' />
          <stop offset='100%' stopColor='#008796' stopOpacity='0' />
        </radialGradient>
        <filter id='softGlow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='3' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      <style>
        {`
          /* Pulsing waves around phone */
          .service-cta-wave {
            fill: none;
            stroke: url(#gradStroke);
            stroke-width: 2;
            stroke-linecap: round;
            opacity: 0;
            animation: serviceCtaPing 2.8s ease-out infinite;
          }
          .service-cta-wave:nth-child(2) { animation-delay: 0.6s; }
          .service-cta-wave:nth-child(3) { animation-delay: 1.2s; }

          @keyframes serviceCtaPing {
            0%   { opacity: 0; transform: scale(0.9); }
            20%  { opacity: 0.35; }
            80%  { opacity: 0.06; transform: scale(1.15); }
            100% { opacity: 0; transform: scale(1.2); }
          }

          /* Connecting call dots animation */
          .service-cta-call-dot {
            fill: #0db6c8;
            opacity: 0.6;
            animation: serviceCtaCallDots 1.5s linear infinite;
          }
          .service-cta-call-dot:nth-child(2) { animation-delay: 0.3s; }
          .service-cta-call-dot:nth-child(3) { animation-delay: 0.6s; }

          @keyframes serviceCtaCallDots {
            0% { opacity: 0.2; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-3px); }
            100% { opacity: 0.2; transform: translateY(0); }
          }

          /* Message bubble animation */
          .service-cta-bubble {
            fill: #0db6c8;
            opacity: 0.8;
            animation: serviceCtaFloatBubble 2s ease-in-out infinite alternate;
          }

          @keyframes serviceCtaFloatBubble {
            0% { transform: translateY(0); opacity: 0.8; }
            100% { transform: translateY(-6px); opacity: 1; }
          }
        `}
      </style>

      {/* Phone icon */}
      <g transform='translate(40,20)'>
        {/* Phone body */}
        <rect
          x='20'
          y='10'
          width='72'
          height='124'
          rx='16'
          ry='16'
          stroke='url(#gradStroke)'
          strokeWidth='2.2'
          fill='#E3F5F7'
        />

        {/* Speaker */}
        <line x1='52' y1='22' x2='80' y2='22' stroke='url(#gradStroke)' strokeWidth='2' />

        {/* Home button */}
        <circle cx='66' cy='118' r='6' fill='url(#gradStroke)' />

        {/* Screen content: connecting call dots */}
        <g transform='translate(44,50)'>
          <circle className='service-cta-call-dot' cx='0' cy='0' r='4' />
          <circle className='service-cta-call-dot' cx='12' cy='0' r='4' />
          <circle className='service-cta-call-dot' cx='24' cy='0' r='4' />
        </g>
      </g>

      {/* Message bubble above phone */}
      <g transform='translate(50,10)'>
        <rect className='service-cta-bubble' x='0' y='0' width='40' height='24' rx='6' ry='6' />
        <polygon className='service-cta-bubble' points='18,24 24,24 21,28' />
      </g>

      {/* Pulsing waves outside phone */}
      <g transform='translate(118,42)'>
        <circle className='service-cta-wave' r='10' />
        <circle className='service-cta-wave' r='18' />
        <circle className='service-cta-wave' r='26' />
      </g>
    </svg>
  )
}

// Add more CTA graphic components here for other services if needed
// export const ServiceCTAWebIcon = () => { ... }
// export const ServiceCTAMobileIcon = () => { ... }

