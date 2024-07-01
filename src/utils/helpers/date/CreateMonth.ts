import React from 'react'
import createDate from './CreateDate'
import GetMonthNumberOfDays from './GetMonthNumberOfDays'

interface CreateMonthParams {
	date?: Date
	locale?: string
}

const CreateMonth = (params?: CreateMonthParams) => {
	const date = params?.date ?? new Date()
	const locale = params?.locale ?? 'default'

	const d = createDate({ date, locale })
	const { month: monthName, year, monthNumber, monthIndex } = d

	const getDay = (dayNumber: number) =>
		createDate({ date: new Date(year, monthIndex, dayNumber), locale })

	const createMonthDays = () => {
		const days = []

		for (let i = 0; i <= GetMonthNumberOfDays(monthIndex, year) - 1; i += 1) {
			days[i] = getDay(i + 1)
		}
		return days
	}
	return {
		getDay,
		monthName,
		monthIndex,
		monthNumber,
		year,
		createMonthDays,
	}
}

export default CreateMonth
