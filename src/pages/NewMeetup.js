

import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';


function NewMeetupPage() {
  const navigate = useNavigate();

   const addMeetupHanlder =(meetupData) =>
   
   {
      fetch('https://react-meetup-app-d72ad-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'content-type':'application/json'
        }
      }
      ).then(()=>{
        navigate('/', { replace: true });
      });
   };


   return <section>
    <h1>Add New Meetup</h1>
     <NewMeetupForm onAddMeetup={addMeetupHanlder} />
   </section>
 }
 
 export default NewMeetupPage;