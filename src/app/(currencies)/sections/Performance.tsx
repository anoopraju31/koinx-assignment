import SectionHeading from '@/app/components/SectionHeading'
import Tabs from '@/app/components/Tabs'
import React from 'react'

const Performance = () => {
	return (
		<div>
			<Tabs />

			<section className='md:p-6'>
				<SectionHeading heading='Performance' />

				<div className='py-5 flex flex-col gap-7'>
					<RangeSlider
						titleLeft="Today's Low"
						titleRight="Today's High"
						valueLeft='46,930.22'
						valueRight='49,343.83'
					/>
					<RangeSlider
						titleLeft='52W Low'
						titleRight='52W High'
						valueLeft='16,930.22'
						valueRight='49,743.83'
					/>
				</div>
			</section>
		</div>
	)
}

export default Performance

interface RangeSliderProps {
	titleLeft: string
	valueLeft: string
	titleRight: string
	valueRight: string
}

const RangeSlider: React.FC<RangeSliderProps> = ({
	titleLeft,
	titleRight,
	valueLeft,
	valueRight,
}) => {
	return (
		<div className='flex items-center gap-7'>
			<div className='flex flex-col gap-[10px] w-28'>
				<p className='text-sm leading-5 text-[#44475b]'> {titleLeft} </p>
				<p className='text-base leading-6 text-[#44475b] font-medium'>
					{valueLeft}
				</p>
			</div>

			<div className='flex-1 h-2 w-full bg-rainbow-gradient rounded-lg'></div>

			<div className='flex flex-col gap-[10px] w-28 text-right'>
				<p className='text-sm leading-5 text-[#44475b]'> {titleRight} </p>
				<p className='text-base leading-6 text-[#44475b] font-medium'>
					{valueRight}
				</p>
			</div>
		</div>
	)
}
