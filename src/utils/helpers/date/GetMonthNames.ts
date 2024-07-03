import { CreateDate } from './index'

export const GetMonthNames = (locale: string = 'default') => {
	const monthesNames: {
		month: ReturnType<typeof CreateDate>['month']
		monthShort: ReturnType<typeof CreateDate>['monthShort']
		monthIndex: ReturnType<typeof CreateDate>['monthIndex']
		date: ReturnType<typeof CreateDate>['date']
	}[] = Array.from({ length: 12 })

	const d = new Date()

	monthesNames.forEach((_, i) => {
		const { month, monthIndex, monthShort, date } = CreateDate({
			locale,
			date: new Date(d.getFullYear(), d.getMonth() + i, d.getDate()),
		})

		monthesNames[monthIndex] = { month, monthIndex, monthShort, date }
	})

	return monthesNames
}
