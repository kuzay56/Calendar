import { CheckDateIsEqual } from './CheckDateIsEqual'

export const CheckIsTodayDate = (date: Date) => {
	const today = new Date()

	return CheckDateIsEqual(today, date)
}
