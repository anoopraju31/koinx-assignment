import React from 'react'
import Breadcrumb from './components/Breadcrumb'

const Home = () => {
	return (
		<div className='h-[300vh] p-4 lg:px-8'>
			<Breadcrumb path={['Cryptocurrencies', 'Bitcoin']} />
		</div>
	)
}

export default Home
