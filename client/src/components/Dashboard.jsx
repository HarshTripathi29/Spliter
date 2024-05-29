import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import GroupCard from './GroupCard';
import AddGroup from './AddGroup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import '../App.css';
import spliter from '../assets/spliter.png';

const Dashboard = ({ groups, addGroup }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div>
     <div>
        <main className="App-main">
        <div className="content">
          <div className="text-section">
            <div className="headline">
              <h2>Split Bills, Not Friendships</h2>
            </div>
            <div className="description">
              <p>We help group of people split expenses and bills when they are sharing costs for a particular event or acticity.</p>
            </div>
            <div className="get-started">
            {user ?  
            (
            <> </>
            ):(
              <Link to="/login"><button>Get Started</button></Link>
            )} 
              <AddGroup addGroup={addGroup} />
            </div>
           
          </div>
          <div className="image-section">
            <img 
              src={spliter}
              alt="Happy people"
            />
          </div>
        </div>
      </main>
        </div>
    <div className="dashboard">
    
            
      <h3>Your Groups</h3>
      <div className="group-cards">
        {groups.map((group) => (
          <Link key={group.id} to={`/group/${group.id}`} style={{ textDecoration: 'none' }}>
            <GroupCard group={group} />
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
