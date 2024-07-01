import React from 'react'

interface CalendarProps {
	locale?: string
	selectedDate: Date
	selectDate: (date: Date) => void
}

const Calendar: React.FC<CalendarProps> = () => {
	console.log('@')

	return <div>popa</div>
}

export default Calendar
