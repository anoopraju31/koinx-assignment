'use client'
import { useEffect, useRef, useState } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import EventCard from './EventCard'

const EventCarousel = () => {
	const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] =
		useState<boolean>(true)
	const [isNextButtonDisabled, setIsNextButtonDisabled] =
		useState<boolean>(false)
	const carouselRef = useRef<HTMLInputElement>(null)

	const handleScroll = () => {
		if (!carouselRef.current) return

		setIsPreviousButtonDisabled(carouselRef.current.scrollLeft === 0)
		setIsNextButtonDisabled(
			carouselRef.current.scrollLeft >=
				carouselRef.current.scrollWidth - carouselRef.current.offsetWidth - 20,
		)
	}

	useEffect(() => {
		const carousel = carouselRef.current

		if (carousel) carousel.addEventListener('scroll', handleScroll)

		return () => {
			if (carousel) carousel.removeEventListener('scroll', handleScroll)
		}
	})

	const scrollToPrevious = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
	}

	const scrollToNext = () => {
		if (!carouselRef.current) return

		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
	}
	return (
		<div className='relative group w-full max-w-5xl px-4'>
			<div
				ref={carouselRef}
				className='w-full flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-300 ease-in-out'>
				<EventCard />
				<EventCard />
				<EventCard />
				<EventCard />
				<EventCard />
				<EventCard />
				<EventCard />
			</div>
			<div className=''>
				<button
					type='button'
					disabled={isPreviousButtonDisabled}
					onClick={scrollToPrevious}
					aria-label='previous button'
					className='absolute top-0 left-2 h-full w-16 flex justify-center items-center disabled:hidden disabled:cursor-default'>
					<div className=' h-10 w-10 bg-white flex justify-center items-center rounded-full text-3xl hover:bg-slate-100'>
						<GrFormPrevious />
					</div>
					<span className='sr-only'> previous</span>
				</button>

				<button
					type='button'
					disabled={isNextButtonDisabled}
					onClick={scrollToNext}
					aria-label='next button'
					className='absolute top-0 right-2 h-full w-16 flex justify-center items-center disabled:hidden disabled:cursor-default'>
					<div className=' h-10 w-10 bg-white flex justify-center items-center rounded-full text-3xl hover:bg-slate-100'>
						<GrFormNext />
					</div>
					<span className='sr-only'> next</span>
				</button>
			</div>
		</div>
	)
}

export default EventCarousel
