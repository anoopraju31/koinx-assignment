import SectionHeading from '@/app/components/SectionHeading'
import SecondarySectionHeading from '@/app/components/SecondarySectionHeading'
import EventCarousel from '@/app/components/EventCarousel'

const Sentiment = () => {
	return (
		<section className='md:p-6'>
			<SectionHeading heading='Sentiment' />
			<SecondarySectionHeading />

			<div className='my-4'>
				<EventCarousel />
			</div>
		</section>
	)
}

export default Sentiment
