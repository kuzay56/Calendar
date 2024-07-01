import React from 'react'

import Calendar from './components/Calendar/Calendar'
import GetMonthesNames from './utils/helpers/date'

import './../src/static/scss/main.scss'

console.log('CreateDate', GetMonthesNames())

function App() {
	const [selectedDate, selectDate] = React.useState(new Date())
	return (
		<div className='app_container'>
			<Calendar selectDate={selectDate} selectedDate={selectedDate} />
		</div>
	)
}

export default App
