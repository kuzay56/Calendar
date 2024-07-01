import React from 'react'

import { CreateMonth, CreateDate } from '../../../utils/helpers/date'

interface useCalendarParams {
	locale?: string
	selectedDate: Date
}
const useCalendar = ({ locale, selectedDate: date }: useCalendarParams) => {
	const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days')
	const [selectedDate, setSelectedDay] = React.useState(createDate({ date }))
	const [selectedMonth, setSelectedMonth] = React.useState(
		CreateMonth({
			date: new Date(selectedDate.year, selectedDate.monthIndex),
			locale,
		})
	)
	const [selectedYear, setSelectedYear] = React.useState(selectedDate.year)
	const monthNames = React.useMemo(() => )

	return {}
}

export default useCalendar
