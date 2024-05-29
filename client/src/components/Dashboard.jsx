import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import GroupCard from './GroupCard';
import AddGroup from './AddGroup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import '../App.css'

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
              <h2>Split Bills, Not Friendship</h2>
            </div>
            <div className="description">
              <p>We help group of peopple split expenses and bills when theyare sharing costs for a particular event or acticity.</p>
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
              src="https://img.freepik.com/premium-vector/happy-people-drinking-friends-party-cocktail-drinks-people-hands-students-friendship-cartoon-persons-clinking-glasses-decent-vector-concept_53562-16798.jpg?w=740" 
              alt="Happy people drinking"
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
