import { useLocale } from '@/hooks/useLocale'
import { useTranslate } from '@/hooks/useTranslate'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
	const { switchLocale, locale } = useLocale()
	const { t } = useTranslate()
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
			<div className='flex items-center justify-between w-full'>
				<h1 className='text-3xl'>{t('app.title')}</h1>
				<select
					onChange={e => {
						switchLocale(e.target.value)
					}}
					className='outline-none rounded-xl text-black px-2 w-32'
					placeholder='Language'>
					<option value='en'>{t('app.locale_switcher.en')}</option>
					<option value='de'>{t('app.locale_switcher.de')}</option>
				</select>
			</div>
		</main>
	)
}
