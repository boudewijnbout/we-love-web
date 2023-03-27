import '../styles/global.css'
import '../styles/theme.css'

export default function App({Component, pageProps, router}) {
    return (
        <Component {...pageProps} key={router.asPath}/>
    )
}
