
import './style.css';
import ReactPlayer from 'react-player'


function App() {
  return (
   <form className='container'>
   
  <div style={{border:'1px solid',color:'white', maxWidth:'100vw'}}>
 
    <h1>Checkpoint JSX</h1>
    <br/>
<h2 className='title white'>Lobna DRISSI</h2>
</div>
    
    <img className='other' src='../R.png'/>
<br/>

<ReactPlayer className='player' width='400px' height='300px' controls autoPlay url='https://www.youtube.com/watch?v=Q6zaz5meZzA&ab_channel=NationalGeographicWildFrance'/>

    </form>
   
  );
}

export default App;
