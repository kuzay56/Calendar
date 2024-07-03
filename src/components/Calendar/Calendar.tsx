import React from 'react'

import useCalendar from './Hooks/useCalendar'

import './Calendar.scss'
import {
	CheckDateIsEqual,
	CheckIsTodayDate,
	GetWeekDaysNames,
} from '../../utils/helpers/date'

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
			<div className='calendar__body'>
				{state.mode === 'days' && (
					<div>
						<div className='calendar__week__names'>
							{state.weekDaysNames.map(GetWeekDaysNames => (
								<div key={GetWeekDaysNames.dayShort}>
									{GetWeekDaysNames.dayShort}
								</div>
							))}
						</div>
						<div className='calendar__days'>
							{state.calendarDays.map(day => {
								const isToday = CheckIsTodayDate(day.date)
								const isSelectedDay = CheckDateIsEqual(
									day.date,
									state.selectedDay.date
								)
								const isAdditionalDay =
									day.monthIndex !== state.selectedMonth.monthIndex

								return (
									<div
										key={`${day.dayNumber}-${day.monthIndex}`}
										aria-hidden
										// onClick={() => {
										// 	functions.setSelectedDay(day)
										// 	selectDate(day.date)
										// }}
										className={[
											'calendar__day',
											isToday ? 'calendar__today__item' : '',
											isSelectedDay ? 'calendar__selected__item' : '',
											isAdditionalDay ? 'calendar__additional__day' : '',
										].join(' ')}
									>
										{day.dayNumber}
									</div>
								)
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Calendar
