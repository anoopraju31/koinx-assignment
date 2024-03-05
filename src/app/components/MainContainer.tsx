import React from 'react'
import EventCard from './EventCard'
import EventCarousel from './EventCarousel'
import About from '../(currencies)/sections/About'
import AlreadyHoldingCrypto from '../(currencies)/sections/AlreadyHoldingCrypto'
import Tokenomics from '../(currencies)/sections/Tokenomics'

const MainContainer = () => {
	return (
		<div className='col-span-full lg:col-span-9 sm:px-4'>
			<div className='w-full my-4'>
				<EventCarousel />
				<About />
				<AlreadyHoldingCrypto />
				<Tokenomics />
			</div>
		</div>
	)
}

export default MainContainer
