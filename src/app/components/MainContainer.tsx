import React from 'react'
import EventCard from './EventCard'

const MainContainer = () => {
	return (
		<div className='flex-1 w-full px-4'>
			<div className='flex gap-3 w-full overflow-hidden'>
				<EventCard />
				<EventCard />
				<EventCard />
			</div>
		</div>
	)
}

export default MainContainer
