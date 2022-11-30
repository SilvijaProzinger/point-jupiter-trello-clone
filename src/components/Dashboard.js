import './Dashboard.scss'
import Boards from './Boards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    return (
        <div className="dashboard__container">
            <div className="dashboard__intro">
                <h1>Welcome Board</h1>
                <FontAwesomeIcon icon={faStar} />
                <div className="dashboard__privacy">
                    <FontAwesomeIcon icon={faLock} /> 
                    <p>Private</p>
                </div>
            </div>
            <Boards/>
        </div>
    )
}

export default Dashboard