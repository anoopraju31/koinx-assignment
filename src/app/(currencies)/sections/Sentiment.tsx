import SectionHeading from '@/app/components/SectionHeading'
import SecondarySectionHeading from '@/app/components/SecondarySectionHeading'
import EventCarousel from '@/app/components/EventCarousel'

const Sentiment = () => {
	return (
		<div>
			<SectionHeading heading='Sentiment' />
			<SecondarySectionHeading />

			<div className='my-4'>
				<EventCarousel />
			</div>
		</div>
	)
}

export default Sentiment
