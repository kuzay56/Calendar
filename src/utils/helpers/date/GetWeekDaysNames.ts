import CreateDate from './CreateDate'

const GetWeekDaysNames = (locale: string = 'default') => {
	const weekDaysNames: {
		day: ReturnType<typeof CreateDate>['day']
		dayShort: ReturnType<typeof CreateDate>['dayShort']
	}[] = Array.from({ length: 7 })

	const date = new Date()
	weekDaysNames.forEach((_, i) => {
		const { day, dayNumberInWeek, dayShort } = CreateDate({
			locale,
			date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i),
		})

		weekDaysNames[dayNumberInWeek - 1] = { day, dayShort }
	})
	return weekDaysNames
}

export default GetWeekDaysNames
