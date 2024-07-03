import React from 'react'

import useCalendar from './Hooks/useCalendar'

import './Calendar.scss'

interface CalendarProps {
	locale?: string
	selectedDate: Date
	selectDate: (date: Date) => void
	firstWeekDay?: number
}

const Calendar: React.FC<CalendarProps> = ({
	locale = 'default',
	firstWeekDay = 2,
	selectDate,
	selectedDate,
}) => {
	const { state, functions } = useCalendar({
		firstWeekDay,
		locale,
		selectedDate,
	})

	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<div aria-hidden className='calendar__header__arrow__left' />
				{state.mode === 'days' && (
					<div aria-hidden onClick={() => functions.setMode('monthes')}>
						{state.monthesNames[state.selectedMonth.monthIndex].month}{' '}
						{state.selectedYear}
					</div>
				)}
				{state.mode === 'monthes' && (
					<div aria-hidden onClick={() => functions.setMode('years')}>
						{state.selectedYear}
					</div>
				)}
				{state.mode === 'years' && (
					<div onClick={() => functions.setMode('monthes')}>
						{state.selectedYearInterval[0]} -{''}
						{state.selectedYearInterval[state.selectedYearInterval.length - 1]}
					</div>
				)}
				<div aria-hidden className='calendar__header__arrow__right' />
			</div>
		</div>
	)
}

export default Calendar
