import React from 'react'
import EventCard from './EventCard'
import EventCarousel from './EventCarousel'
import About from '../(currencies)/sections/About'
import AlreadyHoldingCrypto from '../(currencies)/sections/AlreadyHoldingCrypto'
import Tokenomics from '../(currencies)/sections/Tokenomics'
import Team from '../(currencies)/sections/Team'
import TradingViewWidget from './TradingViewWidget'
import Sentiment from '../(currencies)/sections/Sentiment'

const MainContainer = () => {
	return (
		<div className='col-span-full lg:col-span-9 sm:px-4'>
			<div className='w-full my-4'>
				<EventCarousel />
				<About />
				<AlreadyHoldingCrypto />
				<Tokenomics />
				<Sentiment />
				<Team />
				<TradingViewWidget />
				<About />
				<AlreadyHoldingCrypto />
			</div>
		</div>
	)
}

export default MainContainer
