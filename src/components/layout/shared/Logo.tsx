'use client'

// React Imports
import { useEffect, useRef } from 'react'
import type { CSSProperties, SVGAttributes } from 'react'

// Third-party Imports
import styled from '@emotion/styled'

// Type Imports
import type { VerticalNavContextProps } from '@menu/contexts/verticalNavContext'

// Component Imports
import VuexyLogo from '@core/svg/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'
import { useTheme } from '@mui/material'

type LogoTextProps = {
  isHovered?: VerticalNavContextProps['isHovered']
  isCollapsed?: VerticalNavContextProps['isCollapsed']
  transitionDuration?: VerticalNavContextProps['transitionDuration']
  isBreakpointReached?: VerticalNavContextProps['isBreakpointReached']
  color?: CSSProperties['color']
}

const LogoText = styled.span<LogoTextProps>`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.375rem;
  line-height: 1.09091;
  font-weight: 700;
  letter-spacing: 0.25px;
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed, isBreakpointReached }) =>
    !isBreakpointReached && isCollapsed && !isHovered
      ? 'opacity: 0; margin-inline-start: 0;'
      : 'opacity: 1; margin-inline-start: 12px;'}
`

const Logo = ({ color }: { color?: CSSProperties['color'] }) => {
  // Refs
  const logoTextRef = useRef<HTMLSpanElement>(null)

  // Hooks
  const { isHovered, transitionDuration, isBreakpointReached } = useVerticalNav()
  const { settings } = useSettings()

  // Vars
  const { layout } = settings

  useEffect(() => {
    if (layout !== 'collapsed') {
      return
    }

    if (logoTextRef && logoTextRef.current) {
      if (!isBreakpointReached && layout === 'collapsed' && !isHovered) {
        logoTextRef.current?.classList.add('hidden')
      } else {
        logoTextRef.current.classList.remove('hidden')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, layout, isBreakpointReached])

  return (
    <div className='flex items-center'>
      <MarkytechLogo className='text-2xl text-primary' />
      <LogoText
        color={color}
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={layout === 'collapsed'}
        transitionDuration={transitionDuration}
        isBreakpointReached={isBreakpointReached}
      >
        {themeConfig.templateName}
      </LogoText>
    </div>
  )
}

export default Logo

function MarkytechLogo(props: SVGAttributes<SVGElement>) {
  const { settings } = useSettings()

  const tColor = settings.mode === 'light' ? '#FFFFFF' : '#333333'

  return (
    <svg version='1.2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1186 568' width='32' height='22' {...props}>
      <style>
        {`.s0 { fill: #000000 }
        .s1 { fill: #018997 }
        .s2 { fill: #53bece }
        .s3 { fill: #016775 }`}
      </style>
      <filter id='f0'>
        <feFlood floodColor={tColor} floodOpacity='1'></feFlood>
        <feBlend mode='normal' in2='SourceGraphic'></feBlend>
        <feComposite in2='SourceAlpha' operator='in'></feComposite>
      </filter>
      <g id='T' filter='url(#f0)'>
        <path id='Shape 1' fillRule='evenodd' className='s0' d='m991 295v273h-81v-273z'></path>
        <path id='Shape 1 copy' fillRule='evenodd' className='s0' d='m1012.31 0h173.69v81h-173.69z'></path>
      </g>
      <g id='M'>
        <path
          id='Shape 1 copy 3'
          fillRule='evenodd'
          className='s1'
          d='m359.06 155.28l267.45 267.46-57.27 57.27-267.46-267.45z'
        ></path>
        <path
          id='Shape 1'
          fillRule='evenodd'
          className='s2'
          d='m413.84 211.43l-356.56 356.57-57.28-57.28 356.57-356.56z'
        ></path>
        <path
          id='Shape 1 copy 2'
          fillRule='evenodd'
          className='s3'
          d='m967.95 81.33l-398.67 398.67-57.28-57.28 398.67-398.67z'
        ></path>
        <path id='Shape 1 copy 4' fillRule='evenodd' className='s3' d='m991 0v273h-81v-273z'></path>
        <path id='Shape 1 copy' fillRule='evenodd' className='s3' d='m718.31 0h272.69v81h-272.69z'></path>
      </g>
    </svg>
  )
}
