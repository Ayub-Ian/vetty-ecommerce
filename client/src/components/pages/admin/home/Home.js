import './home.scss'
import Sidebar from '../sidebar/Sidebar'
// import Navbar from '../../navbar/Navbar'
import Widget from '../widget/Widget'
import AdminLayout from '../layout/Layout'
// import Feature from '../../feature/Feature'
// import Chart from '../../chart/Chart'
const Home = () => {
  return (

    <AdminLayout>
 
        <div className="homeContainer">
          {/* <Navbar /> */}
          <div className='widgets'>
            <Widget type='users' />
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div>
          <div className="charts">
            {/* <Feature /> */}
            {/* <Chart /> */}
          </div>
        </div>
        </AdminLayout>
    
  )
}
export default Home