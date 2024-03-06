import Image from 'next/image'
import React from 'react'

const CoinCard = () => {
	return (
		<div className='flex-shrink-0 p-4 rounded-lg bg-white border border-[#e3e3e3]'>
			<div className='flex items-center gap-1 mb-3'>
				<Image
					className='w-7 h-7'
					src='/eth.png'
					alt='eth'
					width={50}
					height={50}
				/>
				<h6 className='text-[#202020]'> Eth </h6>
				<p className='text-xs text-[#32BE88]'> +0.52% </p>
			</div>
			<div className='font-medium text-xl text-[#171717]'> $319.34 </div>
			<Image
				className='w-52'
				src='https://www.coingecko.com/coins/19059/sparkline.svg'
				alt='grph'
				width={200}
				height={60}
			/>
		</div>
	)
}

export default CoinCard
