import CoinCarousel from '@/app/components/CoinCarousel'
import SectionHeading from '@/app/components/SectionHeading'
import React from 'react'

const YouMayLike = () => {
	return (
		<div className='md:p-6 mb-7'>
			<SectionHeading heading='You May Also Like' />
			<CoinCarousel />
		</div>
	)
}

export default YouMayLike
