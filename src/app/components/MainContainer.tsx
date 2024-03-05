import React from 'react'
import EventCard from './EventCard'
import EventCarousel from './EventCarousel'
import About from '../(currencies)/sections/About'

const MainContainer = () => {
	return (
		<div className='col-span-full lg:col-span-9 px-4'>
			<div className='w-full my-4'>
				<EventCarousel />
				<About />
			</div>
		</div>
	)
}

export default MainContainer
