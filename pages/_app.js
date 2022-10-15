import '../styles/style.scss'
import { GlobalTheme } from '@carbon/react'

function ConfigGenerator({ Component, pageProps }) {
  return (
    <GlobalTheme theme="g100">
      <Component {...pageProps} />
    </GlobalTheme>
  )
}

export default ConfigGenerator