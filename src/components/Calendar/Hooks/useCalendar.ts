import React from 'react'

import {
	CreateDate,
	CreateMonth,
	GetMonthNames,
	GetWeekDaysNames,
	GetMonthNumberOfDays,
} from '../../../utils/helpers/date'

interface useCalendarParams {
	locale?: string
	selectedDate: Date
	firstWeekDay: number
}

const getYearsInterval = (year: number) => {
	const startYear = Math.floor(year / 10) * 10
	return [...Array(10)].map((_, index) => startYear + index)
}
const useCalendar = ({
	firstWeekDay = 2,
	locale = 'default',
	selectedDate: date,
}: useCalendarParams) => {
	const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days')
	const [selectedDate, setSelectedDay] = React.useState(CreateDate({ date }))
	const [selectedMonth, setSelectedMonth] = React.useState(
		CreateMonth({
			date: new Date(selectedDate.year, selectedDate.monthIndex),
			locale,
		})
	)
	const [selectedYear, setSelectedYear] = React.useState(selectedDate.year)
	const [selectedYearInterval, setSelectedYearInterval] = React.useState(
		getYearsInterval(selectedDate.year)
	)

	const monthesNames = React.useMemo(() => GetMonthNames(locale), [])
	const weekDaysNames = React.useMemo(
		() => GetWeekDaysNames(firstWeekDay, locale),
		[]
	)

	const days = React.useMemo(
		() => selectedMonth.createMonthDays(),
		[selectedMonth, selectedYear]
	)

	const calendarDays = React.useMemo(() => {
		const monthNumberOfDays = GetMonthNumberOfDays(
			selectedDate.monthIndex,
			selectedYear
		)
		const prevMonthDays = CreateMonth({
			date: new Date(selectedYear, selectedMonth.monthIndex - 1),
			locale,
		}).createMonthDays()

		const nextMonthDays = CreateMonth({
			date: new Date(selectedYear, selectedMonth.monthIndex + 1),
			locale,
		}).createMonthDays()

		const firstDay = days[0]
		const lastDay = days[monthNumberOfDays - 1]

		const shiftIndex = firstWeekDay - 1
		const numberOfPrevDays =
			firstDay.dayNumberInWeek - 1 - shiftIndex < 0
				? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
				: firstDay.dayNumberInWeek - 1 - shiftIndex

		const numberOfNextDays =
			7 - lastDay.dayNumberInWeek + shiftIndex > 6
				? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
				: 7 - lastDay.dayNumberInWeek + shiftIndex

		const totalCalendarDays = days.length + numberOfNextDays + numberOfPrevDays
		const result = []
		for (let i = 0; i < numberOfPrevDays; i += 1) {
			const inverted = numberOfPrevDays - i
			result[i] = prevMonthDays[prevMonthDays.length - inverted]
		}
		for (
			let i = numberOfPrevDays;
			i < totalCalendarDays - numberOfNextDays;
			i += 1
		) {
			result[i] = days[i - numberOfPrevDays]
		}
		for (
			let i = totalCalendarDays - numberOfNextDays;
			i < totalCalendarDays;
			i += 1
		) {
			result[i] = prevMonthDays[i - totalCalendarDays + numberOfNextDays]
		}
		return result
	}, [selectedMonth.year, selectedMonth.monthIndex, selectedYear])

	return {
		state: {
			mode,
			calendarDays,
			weekDaysNames,
			monthesNames,
			selectedDate,
			selectedMonth,
			selectedYear,
			selectedYearInterval,
		},
		functions: {
			setMode,
		},
	}
}

export default useCalendar
