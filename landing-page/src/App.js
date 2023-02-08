import './App.css';
import Grid from './Grid';
import { Fade } from 'react-reveal';

function App() {
  return (<div className='my-10'>
    <Fade top cascade>
      <div className='header_text'><a href="https://www.earthly.ie/product-page/sustainability-starter-pack"><h1 className='text-opacity-90 underline'>Sustainability Starter Kit</h1></a><br></br>
        <p className='text-center'>This starter kit is all you need to start the revolution</p>
    </div>
      <div className="App w-full flex flex-wrap justify-center">
        <div className='rounded-lg'>
          <img className=' img m-w-1/3 px-3 rounded-lg ' src="https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp" alt="img"></img>
        </div>
      </div>
      <Grid />
    </Fade>
  </div>

  );
}

export default App;
