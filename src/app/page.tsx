import React from 'react'
import Breadcrumb from './components/Breadcrumb'
import MainContainer from './components/MainContainer'
import AsideContainer from './components/AsideContainer'

const Home = () => {
	return (
		<div className='h-[300vh] w-full p-4 lg:px-8'>
			<Breadcrumb path={['Cryptocurrencies', 'Bitcoin']} />
			<main className='flex flex-col lg:flex-row'>
				<MainContainer />
				<AsideContainer />
			</main>
		</div>
	)
}

export default Home
