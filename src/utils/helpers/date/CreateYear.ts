import { CreateDate, CreateMonth } from './index'

interface CreateYearParams {
	locale?: string
	year?: number
	monthNumber?: number
}

export const CreateYear = (params?: CreateYearParams) => {
	const locale = params?.locale ?? 'default'

	const monthCount = 12
	const today = CreateDate()

	const year = params?.year ?? today.year
	const monthNumber = params?.monthNumber ?? today.monthNumber

	const month = CreateMonth({ date: new Date(year, monthNumber - 1), locale })

	const getMonthDays = (monthIndex: number) =>
		CreateMonth({ date: new Date(year, monthIndex), locale }).createMonthDays()

	const createYearMonthes = () => {
		const monthes = []

		for (let i = 0; i <= monthCount - 1; i += 1) {
			monthes[i] = getMonthDays(i)
		}
		return monthes
	}
	return {
		createYearMonthes,
		month,
		year,
	}
}
