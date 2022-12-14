
import './App.css';
import React ,{useEffect, useState} from 'react';
import Search from './Search';
import ShowData from './ShowData';
function App() {

 const [data, setData] = useState({});
  const [query , setQuery] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {

  console.log("data değişti:",data);

  }, [data]);
 
  return (
    <div className='App'>
     
     <div className='search'>
      <Search setData={setData} query={query} setQuery={setQuery} setModal={setModal}  />
     </div>
       

       {data.current && <div>
        
        <ShowData data={data} />
       </div> }

       {modal && <div className='modal'>
       The city you searched for was not found ! [:'(]
        </div>}

    </div>
  );
}

export default App;
