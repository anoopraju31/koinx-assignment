import React from 'react'
import Breadcrumb from './components/Breadcrumb'
import MainContainer from './components/MainContainer'

const Home = () => {
	return (
		<div className='h-[300vh] p-4 lg:px-8'>
			<Breadcrumb path={['Cryptocurrencies', 'Bitcoin']} />
			<main className='flex gap-5'>
				<MainContainer />
			</main>
		</div>
	)
}

export default Home
