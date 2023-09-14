import { useLocale } from '@/hooks/useLocale'
import '@/styles/globals.css'
import Head from 'next/head'
import { IntlProvider } from 'react-intl'

export default function App({ Component, pageProps }) {
	const { locale, messages } = useLocale()
	const url = 'https://www.fusheng.website/'
	const title = '台北市內湖區富勝汽車保修-專業日系品牌汽車維修與保養'
	const description =
		'位於內湖區的富勝汽車保修始於1989年，為台北市內湖區經營超過三十年的汽車保修廠，主要服務項目為專業日系品牌汽車維修與保養包含： 三菱 MITSUBISHI、豐田 TOYOTA、日產 Nissan、本田 HONDA、福特 Ford。富勝汽車保修擁有乾淨明亮寬敞的保修廠區、豐富技術和保修經驗技師群，以及全方位的優質專業服務與豐富經驗，精準到位為您的愛車安全把關。除了汽車保養和維修之外，富勝汽車保修還能滿足廣大車主消費者的其它需求，如：電腦診斷，引擎底盤，輪胎，鈑金，...等等。'
	const keywords = [
		'台北市內湖區瑞光路76巷37號',
		'27972728',
		'0920731903',
		'日系品牌汽車維修保養',
		'三菱',
		'MITSUBISHI',
		'豐田',
		'TOYOTA',
		'日產',
		'Nissan',
		'本田',
		'HONDA',
		'福特',
		'Ford',
		'定期保養',
		'電腦診斷',
		'底盤剎車',
		'冷氣空調',
		'鈑金烤漆',
		'輪胎定位',
	]
	const appleIcon = '/favicon.png'
	const ogImgType = 'image/png'
	const ogImgUrl = '/og.png'
	const ogImgWidth = '1200'
	const ogImgHeight = '630'

	// console.log(locale)

	return (
		<>
			<Head>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='googlebot'
					content='index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
				/>
				<meta
					httpEquiv='content-type'
					content='text/html'
				/>
				{/* Search Engine Optimization Meta Tags */}
				<title>{title}</title>
				<meta
					name='description'
					content={description}
				/>
				<meta
					name='keywords'
					content={keywords}
				/>
				<meta
					name='distribution'
					content='web'
				/>
				{/*
      		Facebook Open Graph meta tags
        	documentation: https://developers.facebook.com/docs/sharing/opengraph */}
				<meta
					property='og:locale'
					content='zh-TW'
				/>
				<meta
					property='og:title'
					content={title}
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:url'
					content={url}
				/>
				<meta
					property='og:image'
					content={ogImgUrl}
				/>
				<meta
					property='og:image:secure_url'
					content={ogImgUrl}
				/>
				<meta
					property='og:image:alt'
					content={title}
				/>
				<meta
					property='og:image:type'
					content={ogImgType}
				/>
				<meta
					property='og:image:width'
					content={ogImgWidth}
				/>
				<meta
					property='og:image:height'
					content={ogImgHeight}
				/>
				<meta
					property='og:site_name'
					content={title}
				/>
				<meta
					property='og:description'
					content={description}
				/>

				<link
					rel='apple-touch-icon'
					href={appleIcon}
				/>
				<link
					rel='apple-touch-icon'
					sizes='16x16'
					href={appleIcon}
				/>
				<link
					rel='apple-touch-icon'
					sizes='32x32'
					href={appleIcon}
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href={appleIcon}
				/>
				<link
					rel='apple-touch-startup-image'
					href={ogImgUrl}
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
				/>
				{/*
     		 	Twitter Summary card
        	documentation: https://dev.twitter.com/cards/getting-started
        	Be sure validate your Twitter card markup on the documentation site. */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content={title}
				/>
				<meta
					name='twitter:description'
					content={description}
				/>
				<meta
					name='twitter:image'
					content={ogImgUrl}
				/>
				<meta
					name='twitter:image:secure_url'
					content={ogImgUrl}
				/>
				<meta
					name='twitter:image:alt'
					content={title}
				/>
				<meta
					name='twitter:image:width'
					content={ogImgWidth}
				/>
				<meta
					name='twitter:image:height'
					content={ogImgHeight}
				/>
				<meta
					name='twitter:image:type'
					content={ogImgType}
				/>
			</Head>
			<IntlProvider
				locale={locale}
				messages={messages}>
				<Component {...pageProps} />
			</IntlProvider>
		</>
	)
}
