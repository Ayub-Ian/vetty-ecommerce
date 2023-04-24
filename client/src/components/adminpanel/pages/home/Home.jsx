import './home.scss'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../navbar/Navbar'
import Widget from '../../widget/Widget'
import Feature from '../../feature/Feature'
import Chart from '../../chart/Chart'


const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type='users' />
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div>
          <div className="charts">
            <Feature />
            <Chart />
          </div>
        </div>
    </div>
  )
}

export default Home