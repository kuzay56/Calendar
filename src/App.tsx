import './../src/static/scss/main.scss'
import CreateMonth from './utils/helpers/date/CreateMonth'

console.log('CreateDate', CreateMonth({ locale: 'en-US' }).createMonthDays())

function App() {
	return <div className='app_container'>Calendar</div>
}

export default App
