'use client'

// Web Development SVG Graphic Component
export const WebDevelopmentGraphic = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 400 400'
      style={{ transformBox: 'fill-box' }}
      className='web-dev-animation'
    >
      <defs>
        <radialGradient id='web-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' style={{ stopColor: 'rgba(82, 188, 205, 0.3)', stopOpacity: 1 }} />
          <stop offset='70%' style={{ stopColor: 'rgba(82, 188, 205, 0.1)', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: 'rgba(82, 188, 205, 0)', stopOpacity: 1 }} />
        </radialGradient>
        <filter id='web-glow-effect'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Glow background */}
      <circle cx='200' cy='200' r='150' fill='url(#web-glow)' opacity='0.6' />

      {/* Network lines */}
      <g stroke='rgba(255,255,255,0.8)' strokeWidth='2' fill='none' filter='url(#web-glow-effect)'>
        <line x1='100' y1='150' x2='300' y2='150' />
        <line x1='100' y1='250' x2='300' y2='250' />
        <line x1='150' y1='100' x2='150' y2='300' />
        <line x1='250' y1='100' x2='250' y2='300' />
        <line x1='100' y1='150' x2='150' y2='100' />
        <line x1='300' y1='150' x2='250' y2='100' />
        <line x1='100' y1='250' x2='150' y2='300' />
        <line x1='300' y1='250' x2='250' y2='300' />
        <line x1='150' y1='100' x2='250' y2='100' />
        <line x1='150' y1='300' x2='250' y2='300' />
        <line x1='100' y1='150' x2='100' y2='250' />
        <line x1='300' y1='150' x2='300' y2='250' />
      </g>

      {/* Connection nodes */}
      <g fill='rgba(255,255,255,0.9)' filter='url(#web-glow-effect)'>
        <circle cx='100' cy='150' r='4' />
        <circle cx='300' cy='150' r='4' />
        <circle cx='100' cy='250' r='4' />
        <circle cx='300' cy='250' r='4' />
        <circle cx='150' cy='100' r='4' />
        <circle cx='250' cy='100' r='4' />
        <circle cx='150' cy='300' r='4' />
        <circle cx='250' cy='300' r='4' />
        <circle cx='200' cy='200' r='6' />
      </g>

      {/* Floating particles */}
      <g fill='rgba(82,188,205,0.8)' filter='url(#web-glow-effect)'>
        <circle cx='80' cy='120' r='2' opacity='0.7' />
        <circle cx='320' cy='180' r='2' opacity='0.7' />
        <circle cx='120' cy='320' r='2' opacity='0.7' />
        <circle cx='280' cy='80' r='2' opacity='0.7' />
        <circle cx='60' cy='200' r='2' opacity='0.7' />
        <circle cx='340' cy='200' r='2' opacity='0.7' />
      </g>
    </svg>
  )
}

// Agentic AI SVG Graphic Component
export const AgenticAiGraphic = () => {
  return (
    <svg width='100%' height='100%' viewBox='0 0 400 400' style={{ transformBox: 'fill-box' }}>
      <defs>
        <radialGradient id='ai-core-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' style={{ stopColor: 'rgba(82,188,205,0.45)', stopOpacity: 1 }} />
          <stop offset='70%' style={{ stopColor: 'rgba(82,188,205,0.12)', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: 'rgba(82,188,205,0)', stopOpacity: 1 }} />
        </radialGradient>
        <filter id='ai-glow'>
          <feGaussianBlur stdDeviation='3' result='b' />
          <feMerge>
            <feMergeNode in='b' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx='200' cy='200' r='155' fill='url(#ai-core-glow)' opacity='0.8' />

      {/* Core (hexagon) */}
      <g filter='url(#ai-glow)'>
        <polygon
          points='200,165 227,180 227,210 200,225 173,210 173,180'
          fill='rgba(82,188,205,0.12)'
          stroke='rgba(82,188,205,0.95)'
          strokeWidth='2'
        />
        <circle cx='200' cy='195' r='3' fill='rgba(82,188,205,1)' />
      </g>

      {/* Orbit rings */}
      <g stroke='rgba(255,255,255,0.5)' fill='none' filter='url(#ai-glow)'>
        <circle cx='200' cy='200' r='70' opacity='0.6' />
        <circle cx='200' cy='200' r='110' opacity='0.4' />
      </g>

      {/* Orbiting agents (rotate) */}
      <g>
        <g transform='rotate(0 200 200)'>
          <circle cx='200' cy='90' r='8' fill='rgba(255,255,255,0.9)' />
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            from='0 200 200'
            to='360 200 200'
            dur='10s'
            repeatCount='indefinite'
          />
        </g>
        <g transform='rotate(180 200 200)'>
          <circle cx='200' cy='310' r='8' fill='rgba(255,255,255,0.9)' />
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            from='0 200 200'
            to='360 200 200'
            dur='14s'
            repeatCount='indefinite'
          />
        </g>
        <g transform='rotate(90 200 200)'>
          <circle cx='200' cy='200' r='6' fill='rgba(82,188,205,1)' />
          <animate attributeName='r' values='6;9;6' dur='2.5s' repeatCount='indefinite' />
        </g>
      </g>

      {/* Pulsing signal arcs */}
      <g stroke='rgba(82,188,205,0.95)' strokeWidth='2' fill='none' filter='url(#ai-glow)'>
        <path d='M130 200 A70 70 0 0 1 270 200' strokeDasharray='200' strokeDashoffset='200'>
          <animate attributeName='stroke-dashoffset' values='200;0' dur='2.2s' repeatCount='indefinite' />
        </path>
        <path d='M90 200 A110 110 0 0 1 310 200' strokeDasharray='300' strokeDashoffset='300' opacity='0.7'>
          <animate attributeName='stroke-dashoffset' values='300;0' dur='3.2s' repeatCount='indefinite' />
        </path>
      </g>

      {/* Floating particles */}
      <g fill='rgba(82,188,205,0.9)' filter='url(#ai-glow)'>
        <circle cx='70' cy='120' r='2'>
          <animate attributeName='opacity' values='0.3;1;0.3' dur='3s' repeatCount='indefinite' />
        </circle>
        <circle cx='330' cy='180' r='2'>
          <animate attributeName='opacity' values='0.3;1;0.3' dur='2.6s' repeatCount='indefinite' />
        </circle>
        <circle cx='120' cy='330' r='2'>
          <animate attributeName='opacity' values='0.3;1;0.3' dur='2.8s' repeatCount='indefinite' />
        </circle>
        <circle cx='280' cy='80' r='2'>
          <animate attributeName='opacity' values='0.3;1;0.3' dur='3.4s' repeatCount='indefinite' />
        </circle>
      </g>
    </svg>
  )
}

// Mobile App Development SVG Graphic Component
export const MobileAppGraphic = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 400 400'
      style={{ transformBox: 'fill-box' }}
      className='mobile-dev-animation'
    >
      <defs>
        <radialGradient id='mobile-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' style={{ stopColor: 'rgba(82, 188, 205, 0.3)', stopOpacity: 1 }} />
          <stop offset='70%' style={{ stopColor: 'rgba(82, 188, 205, 0.1)', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: 'rgba(82, 188, 205, 0)', stopOpacity: 1 }} />
        </radialGradient>
        <filter id='mobile-glow-effect'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <linearGradient id='phoneGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: 'rgba(82, 188, 205, 0.9)', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: 'rgba(2, 104, 117, 0.7)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Glow background */}
      <circle cx='200' cy='200' r='150' fill='url(#mobile-glow)' opacity='0.6' />

      {/* Central Mobile Device */}
      <g className='mobile-device' filter='url(#mobile-glow-effect)'>
        {/* Phone body */}
        <rect x='140' y='80' width='120' height='240' rx='15' fill='url(#phoneGradient)' opacity='0.9' />
        {/* Screen */}
        <rect x='150' y='110' width='100' height='180' rx='5' fill='rgba(255,255,255,0.95)' className='app-screen' />
        {/* Screen content lines (representing app interface) */}
        <rect x='160' y='130' width='80' height='8' rx='2' fill='rgba(82, 188, 205, 0.6)' />
        <rect x='160' y='150' width='60' height='8' rx='2' fill='rgba(82, 188, 205, 0.4)' />
        <rect x='160' y='170' width='70' height='8' rx='2' fill='rgba(82, 188, 205, 0.4)' />
        <circle cx='200' cy='220' r='15' fill='rgba(82, 188, 205, 0.5)' />
        <rect x='160' y='245' width='80' height='30' rx='4' fill='rgba(82, 188, 205, 0.3)' />
        {/* Home indicator */}
        <rect x='190' y='305' width='20' height='4' rx='2' fill='rgba(255,255,255,0.5)' />
      </g>

      {/* Rotating App Icons around the phone */}
      <g className='rotating-apps' transformOrigin='200 200'>
        {/* App Icon 1 (Top) */}
        <g className='app-icon'>
          <rect
            x='175'
            y='40'
            width='50'
            height='50'
            rx='10'
            fill='rgba(82, 188, 205, 0.9)'
            filter='url(#mobile-glow-effect)'
          />
          <circle cx='200' cy='55' r='8' fill='rgba(255,255,255,0.9)' />
          <rect x='185' y='68' width='30' height='6' rx='2' fill='rgba(255,255,255,0.9)' />
          <circle cx='200' cy='75' r='2' fill='rgba(255,255,255,0.9)' className='notification' />
        </g>

        {/* App Icon 2 (Right) */}
        <g className='app-icon'>
          <rect
            x='310'
            y='175'
            width='50'
            height='50'
            rx='10'
            fill='rgba(2, 104, 117, 0.9)'
            filter='url(#mobile-glow-effect)'
          />
          <rect x='320' y='190' width='30' height='20' rx='3' fill='rgba(255,255,255,0.9)' />
          <circle cx='335' cy='215' r='3' fill='rgba(255,255,255,0.9)' />
        </g>

        {/* App Icon 3 (Bottom) */}
        <g className='app-icon'>
          <rect
            x='175'
            y='310'
            width='50'
            height='50'
            rx='10'
            fill='rgba(82, 188, 205, 0.9)'
            filter='url(#mobile-glow-effect)'
          />
          <path
            d='M 190 325 L 200 335 L 210 325 L 205 325 L 205 340 L 195 340 L 195 325 Z'
            fill='rgba(255,255,255,0.9)'
          />
        </g>

        {/* App Icon 4 (Left) */}
        <g className='app-icon'>
          <rect
            x='40'
            y='175'
            width='50'
            height='50'
            rx='10'
            fill='rgba(2, 104, 117, 0.9)'
            filter='url(#mobile-glow-effect)'
          />
          <circle cx='65' cy='190' r='8' fill='rgba(255,255,255,0.9)' />
          <line x1='55' y1='205' x2='75' y2='205' stroke='rgba(255,255,255,0.9)' strokeWidth='2' />
          <line x1='55' y1='212' x2='75' y2='212' stroke='rgba(255,255,255,0.9)' strokeWidth='2' />
        </g>
      </g>

      {/* Floating App Icons */}
      <g className='floating-icon'>
        <rect
          x='50'
          y='50'
          width='35'
          height='35'
          rx='7'
          fill='rgba(82, 188, 205, 0.7)'
          filter='url(#mobile-glow-effect)'
        />
        <circle cx='67.5' cy='60' r='5' fill='rgba(255,255,255,0.9)' />
        <rect x='55' y='70' width='25' height='4' rx='1' fill='rgba(255,255,255,0.9)' />
      </g>

      <g className='floating-icon'>
        <rect
          x='315'
          y='50'
          width='35'
          height='35'
          rx='7'
          fill='rgba(2, 104, 117, 0.7)'
          filter='url(#mobile-glow-effect)'
        />
        <rect x='322' y='60' width='21' height='15' rx='2' fill='rgba(255,255,255,0.9)' />
      </g>

      <g className='floating-icon'>
        <rect
          x='50'
          y='315'
          width='35'
          height='35'
          rx='7'
          fill='rgba(82, 188, 205, 0.7)'
          filter='url(#mobile-glow-effect)'
        />
        <circle cx='67.5' cy='325' r='6' fill='rgba(255,255,255,0.9)' />
        <circle cx='67.5' cy='340' r='3' fill='rgba(255,255,255,0.9)' />
      </g>

      <g className='floating-icon'>
        <rect
          x='315'
          y='315'
          width='35'
          height='35'
          rx='7'
          fill='rgba(2, 104, 117, 0.7)'
          filter='url(#mobile-glow-effect)'
        />
        <rect x='320' y='325' width='25' height='20' rx='2' fill='rgba(255,255,255,0.9)' />
      </g>
    </svg>
  )
}

// UI/UX Design SVG Graphic Component
export const UiUxDesignGraphic = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 400 400'
      style={{ transformBox: 'fill-box' }}
      className='design-animation'
    >
      <defs>
        <radialGradient id='design-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' style={{ stopColor: 'rgba(82, 188, 205, 0.4)', stopOpacity: 1 }} />
          <stop offset='70%' style={{ stopColor: 'rgba(82, 188, 205, 0.15)', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: 'rgba(82, 188, 205, 0)', stopOpacity: 1 }} />
        </radialGradient>
        <filter id='design-glow-effect'>
          <feGaussianBlur stdDeviation='4' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Glow background */}
      <circle cx='200' cy='200' r='160' fill='url(#design-glow)' opacity='0.65' />

      {/* Design grid lines (representing design layout) */}
      <g
        stroke='rgba(255,255,255,0.7)'
        strokeWidth='2.5'
        fill='none'
        filter='url(#design-glow-effect)'
        strokeLinecap='round'
      >
        {/* Grid structure representing design canvas */}
        <line x1='120' y1='140' x2='280' y2='140' />
        <line x1='120' y1='260' x2='280' y2='260' />
        <line x1='120' y1='140' x2='120' y2='260' />
        <line x1='280' y1='140' x2='280' y2='260' />
        {/* Design elements connections */}
        <line x1='120' y1='140' x2='170' y2='100' />
        <line x1='280' y1='140' x2='230' y2='100' />
        <line x1='120' y1='260' x2='170' y2='300' />
        <line x1='280' y1='260' x2='230' y2='300' />
        {/* Cross connections */}
        <line x1='170' y1='100' x2='230' y2='100' />
        <line x1='170' y1='300' x2='230' y2='300' />
        <line x1='120' y1='140' x2='120' y2='260' />
        <line x1='280' y1='140' x2='280' y2='260' />
      </g>

      {/* Design elements (representing UI components) */}
      <g fill='rgba(255,255,255,0.95)' filter='url(#design-glow-effect)'>
        {/* Corner design markers */}
        <circle cx='120' cy='140' r='5' />
        <circle cx='280' cy='140' r='5' />
        <circle cx='120' cy='260' r='5' />
        <circle cx='280' cy='260' r='5' />
        {/* Top design points */}
        <circle cx='170' cy='100' r='4' />
        <circle cx='230' cy='100' r='4' />
        {/* Bottom design points */}
        <circle cx='170' cy='300' r='4' />
        <circle cx='230' cy='300' r='4' />
        {/* Central design focus */}
        <circle cx='200' cy='200' r='7' />
      </g>

      {/* Color palette particles (representing design colors) */}
      <g fill='rgba(82,188,205,0.85)' filter='url(#design-glow-effect)'>
        <circle cx='90' cy='110' r='3' opacity='0.8' />
        <circle cx='310' cy='170' r='3' opacity='0.8' />
        <circle cx='130' cy='310' r='3' opacity='0.8' />
        <circle cx='270' cy='70' r='3' opacity='0.8' />
        <circle cx='70' cy='200' r='3' opacity='0.8' />
        <circle cx='330' cy='200' r='3' opacity='0.8' />
        {/* Additional design elements */}
        <circle cx='200' cy='120' r='2.5' opacity='0.7' />
        <circle cx='200' cy='280' r='2.5' opacity='0.7' />
      </g>

      {/* Brush stroke effects (curved design paths) */}
      <g
        stroke='rgba(82,188,205,0.6)'
        strokeWidth='3'
        fill='none'
        filter='url(#design-glow-effect)'
        strokeLinecap='round'
      >
        <path d='M 150 150 Q 175 130 200 140 T 250 150' opacity='0.7' />
        <path d='M 150 250 Q 175 270 200 260 T 250 250' opacity='0.7' />
      </g>
    </svg>
  )
}

// Digital Marketing SVG Graphic Component
export const DigitalMarketingGraphic = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 400 400'
      style={{ transformBox: 'fill-box' }}
      className='marketing-animation'
    >
      <defs>
        <radialGradient id='marketing-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' style={{ stopColor: 'rgba(82, 188, 205, 0.3)', stopOpacity: 1 }} />
          <stop offset='70%' style={{ stopColor: 'rgba(82, 188, 205, 0.1)', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: 'rgba(82, 188, 205, 0)', stopOpacity: 1 }} />
        </radialGradient>
        <filter id='marketing-glow-effect'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Glow background */}
      <circle cx='200' cy='200' r='150' fill='url(#marketing-glow)' opacity='0.6' />

      {/* Analytics Chart (Left side) */}
      <g transform='translate(80, 120)'>
        <rect x='0' y='80' width='15' height='20' fill='rgba(82, 188, 205, 0.9)' rx='2' className='chart-bar' />
        <rect x='20' y='60' width='15' height='40' fill='rgba(82, 188, 205, 0.9)' rx='2' className='chart-bar' />
        <rect x='40' y='40' width='15' height='60' fill='rgba(82, 188, 205, 0.9)' rx='2' className='chart-bar' />
        <rect x='60' y='25' width='15' height='75' fill='rgba(82, 188, 205, 0.9)' rx='2' className='chart-bar' />
        <rect x='80' y='10' width='15' height='90' fill='rgba(82, 188, 205, 0.9)' rx='2' className='chart-bar' />
        {/* Chart base line */}
        <line x1='0' y1='100' x2='100' y2='100' stroke='rgba(255,255,255,0.3)' strokeWidth='1' />
        {/* Trending arrow */}
        <path d='M 90 15 L 105 5 L 90 0 Z' fill='rgba(82, 188, 205, 0.9)' className='trending-arrow' />
      </g>

      {/* Rotating Social Media Icons */}
      <g className='rotating-network' transformOrigin='200 200'>
        {/* Facebook Icon (Top) */}
        <g className='social-icon' transform='translate(200, 80)'>
          <circle cx='0' cy='0' r='25' fill='rgba(59, 89, 152, 0.9)' filter='url(#marketing-glow-effect)' />
          <path
            d='M -8 -5 L -8 5 L 0 5 L 0 12 L 8 12 L 8 5 L 12 5 L 12 -5 L 8 -5 L 8 -10 L 0 -10 L 0 -5 Z'
            fill='rgba(255,255,255,0.95)'
            transform='scale(0.8)'
          />
        </g>

        {/* Instagram Icon (Right) */}
        <g className='social-icon' transform='translate(320, 200)'>
          <circle cx='0' cy='0' r='25' fill='rgba(225, 48, 108, 0.9)' filter='url(#marketing-glow-effect)' />
          <circle cx='0' cy='0' r='12' fill='none' stroke='rgba(255,255,255,0.95)' strokeWidth='2' />
          <circle cx='8' cy='-8' r='2' fill='rgba(255,255,255,0.95)' />
        </g>

        {/* Twitter/X Icon (Bottom) */}
        <g className='social-icon' transform='translate(200, 320)'>
          <circle cx='0' cy='0' r='25' fill='rgba(29, 161, 242, 0.9)' filter='url(#marketing-glow-effect)' />
          <path
            d='M -12 0 L -8 0 L -4 -8 L 4 -4 L 8 0 L 4 0 L 8 4 L 4 4 L 0 0 L -4 4 L -8 0 Z'
            fill='rgba(255,255,255,0.95)'
            transform='rotate(-45) scale(0.7)'
          />
        </g>

        {/* LinkedIn Icon (Left) */}
        <g className='social-icon' transform='translate(80, 200)'>
          <circle cx='0' cy='0' r='25' fill='rgba(0, 119, 181, 0.9)' filter='url(#marketing-glow-effect)' />
          <rect x='-10' y='-8' width='6' height='16' fill='rgba(255,255,255,0.95)' rx='1' />
          <rect x='-2' y='2' width='12' height='6' fill='rgba(255,255,255,0.95)' rx='1' />
          <circle cx='8' cy='-10' r='2' fill='rgba(255,255,255,0.95)' />
        </g>
      </g>

      {/* Engagement Metrics (Center) */}
      <g transform='translate(200, 200)'>
        {/* Likes icon */}
        <g className='engagement-metric' transform='translate(-40, -20)'>
          <circle cx='0' cy='0' r='18' fill='rgba(82, 188, 205, 0.8)' filter='url(#marketing-glow-effect)' />
          <path
            d='M 0 -6 C -3 -6 -6 -3 -6 0 C -6 6 0 12 0 12 C 0 12 6 6 6 0 C 6 -3 3 -6 0 -6 Z'
            fill='rgba(255,255,255,0.95)'
            transform='scale(0.6)'
          />
          <text x='0' y='28' textAnchor='middle' fill='rgba(255,255,255,0.9)' fontSize='10' fontWeight='bold'>
            2.5K
          </text>
        </g>

        {/* Shares icon */}
        <g className='engagement-metric' transform='translate(40, -20)'>
          <circle cx='0' cy='0' r='18' fill='rgba(2, 104, 117, 0.8)' filter='url(#marketing-glow-effect)' />
          <path
            d='M -6 0 L 0 -6 L 6 0 M 0 -6 L 0 6'
            stroke='rgba(255,255,255,0.95)'
            strokeWidth='2'
            fill='none'
            transform='scale(0.7)'
          />
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='none'
            stroke='rgba(255,255,255,0.95)'
            strokeWidth='2'
            transform='scale(0.7)'
          />
          <text x='0' y='28' textAnchor='middle' fill='rgba(255,255,255,0.9)' fontSize='10' fontWeight='bold'>
            856
          </text>
        </g>

        {/* Views icon */}
        <g className='engagement-metric' transform='translate(0, 20)'>
          <circle cx='0' cy='0' r='18' fill='rgba(82, 188, 205, 0.8)' filter='url(#marketing-glow-effect)' />
          <path d='M 0 -8 L 6 0 L 0 8 L -6 0 Z' fill='rgba(255,255,255,0.95)' transform='scale(0.7)' />
          <text x='0' y='28' textAnchor='middle' fill='rgba(255,255,255,0.9)' fontSize='10' fontWeight='bold'>
            12K
          </text>
        </g>

        {/* Share ripple effect */}
        <circle
          cx='0'
          cy='0'
          r='30'
          fill='none'
          stroke='rgba(82, 188, 205, 0.4)'
          strokeWidth='2'
          className='share-ripple'
        />
        <circle
          cx='0'
          cy='0'
          r='30'
          fill='none'
          stroke='rgba(82, 188, 205, 0.3)'
          strokeWidth='2'
          className='share-ripple'
          style={{ animationDelay: '1s' }}
        />
      </g>

      {/* Data flow lines */}
      <g
        stroke='rgba(82,188,205,0.5)'
        strokeWidth='2'
        fill='none'
        filter='url(#marketing-glow-effect)'
        className='data-flow'
      >
        <line x1='100' y1='200' x2='150' y2='200' />
        <line x1='250' y1='200' x2='300' y2='200' />
        <line x1='200' y1='100' x2='200' y2='150' />
        <line x1='200' y1='250' x2='200' y2='300' />
      </g>
    </svg>
  )
}

// Add more graphic components here for other services
// etc.
