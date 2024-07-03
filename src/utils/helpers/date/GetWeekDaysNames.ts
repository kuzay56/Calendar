import { CreateDate } from './index'

export const GetWeekDaysNames = (
	firstWeekDay: number = 1,
	locale: string = 'default'
) => {
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
	return [
		...weekDaysNames.slice(firstWeekDay - 1),
		...weekDaysNames.slice(0, firstWeekDay - 1),
	]
}
