
import './App.css';
import React ,{useEffect, useState} from 'react';
import Search from './Search';
import ShowData from './ShowData';
function App() {

 const [data, setData] = useState({});
  const [query , setQuery] = useState('');

  useEffect(() => {

  console.log("data değişti:",data);

  }, [data]);
 
  return (
    <div className='App'>
     
     <div className='search'>
      <Search setData={setData} query={query} setQuery={setQuery}  />
     </div>
       

       {data.current && <div>
        
        <ShowData data={data} />
       </div> }

    </div>
  );
}

export default App;
