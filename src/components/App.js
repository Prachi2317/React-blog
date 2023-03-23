import {Switch,Routes,Route} from 'react-router-dom'
import{Navbar,Home,CreatePost,PostDetail} from './index.js'

function App() {
  return (
    <div className="">
     <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/post/:postId' element={<PostDetail/>} />
        <Route exact path='/create-post' element={<CreatePost/>} />

        
      </Routes>
     
    </div>
  );
}

export default App;
