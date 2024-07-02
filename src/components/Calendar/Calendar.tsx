import React from 'react'
import useCalendar from './Hooks/useCalendar'

interface CalendarProps {
	locale?: string
	selectedDate: Date
	selectDate: (date: Date) => void
}

const Calendar: React.FC<CalendarProps> = ({
	locale = 'default',
	selectDate,
	selectedDate,
}) => {
	const {} = useCalendar({ locale, selectedDate })

	return <div>popa</div>
}

export default Calendar
