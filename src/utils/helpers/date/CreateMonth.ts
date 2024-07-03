import { CreateDate, GetMonthNumberOfDays } from './index'

interface CreateMonthParams {
	date?: Date
	locale?: string
}

export const CreateMonth = (params?: CreateMonthParams) => {
	const date = params?.date ?? new Date()
	const locale = params?.locale ?? 'default'

	const d = CreateDate({ date, locale })
	const { month: monthName, year, monthNumber, monthIndex } = d

	const getDay = (dayNumber: number) =>
		CreateDate({ date: new Date(year, monthIndex, dayNumber), locale })

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
