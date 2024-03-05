import React from 'react'
import EventCard from './EventCard'
import EventCarousel from './EventCarousel'

const MainContainer = () => {
	return (
		<div className='flex-1 px-4'>
			<div className='w-full'>
				<EventCarousel />
			</div>
		</div>
	)
}

export default MainContainer
