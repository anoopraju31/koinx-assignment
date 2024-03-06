import CoinCarousel from '@/app/components/CoinCarousel'
import SectionHeading from '@/app/components/SectionHeading'
import React from 'react'

const TrendingCoins = () => {
	return (
		<div className='md:p-6 mb-7'>
			<SectionHeading heading='Trending Coins' />
			<CoinCarousel />
		</div>
	)
}

export default TrendingCoins
