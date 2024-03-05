import Hero from '../(currencies)/sections/Hero'
import Sentiment from '../(currencies)/sections/Sentiment'
import About from '../(currencies)/sections/About'
import AlreadyHoldingCrypto from '../(currencies)/sections/AlreadyHoldingCrypto'
import Tokenomics from '../(currencies)/sections/Tokenomics'
import Team from '../(currencies)/sections/Team'
import Tabs from '../components/Tabs'

const MainContainer = () => {
	return (
		<div className='col-span-full lg:col-span-9 sm:px-4'>
			<div className='w-full my-4'>
				<Hero />
				<Tabs />
				<Sentiment />
				<About />
				<AlreadyHoldingCrypto />
				<Tokenomics />
				<Team />
			</div>
		</div>
	)
}

export default MainContainer
