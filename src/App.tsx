import './../src/static/scss/main.scss'
import CreateYear from './utils/helpers/date/CreateYear'

console.log('CreateDate', CreateYear({ locale: 'en-US' }).createYearMonthes())

function App() {
	return <div className='app_container'>Calendar</div>
}

export default App
