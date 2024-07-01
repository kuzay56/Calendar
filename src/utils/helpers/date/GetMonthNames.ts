import createDate from './CreateDate'

const GetMonthNames = (locale: string = 'default') => {
	const monthesNames: {
		month: ReturnType<typeof createDate>['month']
		monthShort: ReturnType<typeof createDate>['monthShort']
		monthIndex: ReturnType<typeof createDate>['monthIndex']
		date: ReturnType<typeof createDate>['date']
	}[] = Array.from({ length: 12 })

	const d = new Date()

	monthesNames.forEach((_, i) => {
		const { month, monthIndex, monthShort, date } = createDate({
			locale,
			date: new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()),
		})

		monthesNames[monthIndex] = { month, monthIndex, monthShort, date }
	})

	return monthesNames
}

export default GetMonthNames
