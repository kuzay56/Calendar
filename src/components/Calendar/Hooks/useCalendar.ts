import React from 'react'

import CreateDate from '../../../utils/helpers/date/CreateDate'
import CreateMonth from '../../../utils/helpers/date/CreateMonth'
import GetMonthNames from '../../../utils/helpers/date/GetMonthNames'
import GetWeekDaysNames from '../../../utils/helpers/date/GetWeekDaysNames'

interface useCalendarParams {
	locale?: string
	selectedDate: Date
	firstWeekDay: number
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

	const monthNames = React.useMemo(() => GetMonthNames(locale), [])
	const weekDaysNames = React.useMemo(
		() => GetWeekDaysNames(firstWeekDay, locale),
		[]
	)

	const days = React.useMemo(
		() => selectedMonth.createMonthDays(),
		[selectedMonth, selectedYear]
	)

	console.log('days', days)

	return {}
}

export default useCalendar
