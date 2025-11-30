declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string
          autoplay?: boolean
          loop?: boolean
          id?: string
        },
        HTMLElement
      >
    }
  }
}

export {}

