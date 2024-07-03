import { CreateDate } from './CreateDate'

export const GetMonthesNames = (locale: string = 'defalut') => {
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
			date: new Date(d.getFullYear(), d.getMonth() + i, 1),
		})

		monthesNames[monthIndex] = { month, monthIndex, monthShort, date }
	})

	return monthesNames
}
