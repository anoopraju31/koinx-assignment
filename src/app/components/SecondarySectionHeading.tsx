import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'

const SecondarySectionHeading = () => {
	return (
		<div className='flex items-center gap-2'>
			<h3 className='text-lg font-semibold text-[#44475b]'>Key Events</h3>
			<div className='text-[#7C7E8C] text-xl'>
				<IoMdInformationCircle size={24} />
			</div>
		</div>
	)
}

export default SecondarySectionHeading
