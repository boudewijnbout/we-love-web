import '../styles/global.css'
import '../styles/theme.css'

import {AnimatePresence} from "framer-motion";

export default function App({Component, pageProps, router}) {
    return (
        <AnimatePresence wait={true}>
            <Component {...pageProps} key={router.asPath}/>
        </AnimatePresence>
    )
}
