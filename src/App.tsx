import React from 'react'

import Calendar from './components/Calendar/Calendar'
import { FormateDate } from './utils/helpers/date'

import './../src/static/scss/main.scss'

function App() {
	const [selectedDate, selectDate] = React.useState(new Date())
	return (
		<div className='app__container'>
			<div className='date__container'>
				{FormateDate(selectedDate, 'DD MM YYYY')}
			</div>
			<Calendar selectDate={selectDate} selectedDate={selectedDate} />
		</div>
	)
}

export default App
