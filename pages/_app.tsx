import "../styles/globals.css"
import { useState, useEffect, ReactComponentElement } from "react"
import { I18nextProvider, useTranslation } from "react-i18next"
import i18nInit from "../translation"
import { useGlobalStore } from "../store/globalStore"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { QueryClient } from "react-query"
import { QueryClientProvider } from "react-query"
import Head from "next/head"
import SplashScreen from "@components/common/SplashScreen"
import { useRouter } from "next/router"
import { useUserStore } from "store/userStore"
import { Toaster } from "react-hot-toast"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const queryClient = new QueryClient()
	const { i18n } = useTranslation()
	const [isReady, setIsReady] = useState<boolean>(false)
	const darkMode = useGlobalStore((state) => state.darkMode)
	const setDarkMode = useGlobalStore((state) => state.setDarkMode)
	const router = useRouter()
	const user = useUserStore((state) => state.user)

	useEffect(() => {
		// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		//   setDarkMode(true);
		// }
		// setIsReady(true);
		document.documentElement.lang = i18n.language
		document.documentElement.dir = i18n.language.startsWith("en") ? "ltr" : "rtl"
	}, [])

	// useEffect(() => {
	//   if (!user) {
	//     router.push("/auth/signup");
	//     setIsReady(true);
	//   } else {
	//     router.push("/social/newsfeed");
	//     setIsReady(true);
	//   }
	// }, [user]);

	useEffect(() => {
		setIsReady(true)
	}, [])

	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<div className={`${darkMode ? "dark" : ""}`}>
			<Head>
				<link rel="icon" href="/logo-dark.ico" media="(prefers-color-scheme: light)" type="image/png" />
				<link rel="icon" href="/logo-white.ico" media="(prefers-color-scheme: dark)" type="image/png" sizes="256x256" />
				<title>Vikinger</title>
			</Head>
			<div className="selection:text-white selection:bg-lightTwo selection:dark:text-white selection:dark:bg-darkThree">
				<SplashScreen className={` ${isReady ? "opacity-0" : "opacity-100"}`} />
				<Toaster position="top-center" toastOptions={{ duration: 3000 }} />
				<QueryClientProvider client={queryClient}>
					<I18nextProvider i18n={i18nInit}>
						{isReady ? getLayout(<Component {...pageProps} />) : <SplashScreen />}
					</I18nextProvider>
				</QueryClientProvider>
			</div>
		</div>
	)
}
