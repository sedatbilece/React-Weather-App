
function Search ({setData,setQuery,query,setModal}){

    const getData = () =>{
    
        fetch(`http://api.weatherapi.com/v1/current.json?key=9ae7eb8da3f34ae3a71130750223107&q=${query}&aqi=no`)
        .then(res => {
          if(res.ok && res.status === 200){
            setModal(false);
            return res.json();

          }
          else{
            setModal(true);
            throw new Error('Something went wrong');
            
          }
        })
        .then(data => setData(data));
        setQuery('')
    }

    return (<div className="con">
        <input type="text" placeholder="Search"  onChange={(e)=>setQuery(e.target.value)}  value={query} className='Search' />
      <button className="Ara" onClick={()=> getData()}  type="submit" >
      <img className="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE3ElEQVR4nO2aa4hVVRSAv5l7J0eDydSZnAqFjGCGlMI0yh4El7KkCIT0Ry/MiB4qQkhkkdEoERUU/ogeDObPfpTNUBTag2RyMi01p3LQlMIZItO01Lkz4/RjzeWsve/j3Mfe5456PrjMmr3P2Wvtdc7ee521N8TExMTExJy31HhoMwlcC9wItADTgQbgAuAY8CewD9gObAWOe7ChKswE1iMdHCnylwY6gIVAbfQmu6EF6ATOUHzHc/16gcUR217REEgCa4BVQJ1V1wtsBr4flY8jDroUuAS4ErgVmAckrHu/AB4C/qjANu80IuNXP8EBoB24roR2pgLPAH1WW38BKYf2OmUa8CumwZ8iT7VcJgBtyJygHbqoIks90IjZ+TSwjOyhVIc8wdeBTcA25I1pDWl/LnBItT8ILHBke8UkMV/7f4H51jUXAs8DR8k90b1VhJ7LgJ8sPWGOi4Q2zCdvd/4O4DD5Z/lBZLkrhmbggLp3D1BfmfmV0Yo5Ppdb9U8iHdQd3g+8BtwLXA9MLlHn1cBJ1d7qMm13Qqcy5DPMMf8EZscPAffjJrBZhjkUmhy0WTIzCYKcNHCVqkthPvkvKf1JFyIB7FLtv+Sw7aJZrwzYoMrrgYOq7msk3nfNfUpHP9mBk1eSmLH9XFX3tCo/jCyRPkhgTq6RBkhzMCe1DDXA76puqWc73lS6XvGsy2CFUvy2Kr9Blffh/7W8R+nrctlw2EzdouRdSr5dyR8Cw84sys2PSm7Je1UZhDlgupL7lazj/m3uzMlLP/L0ASYCF7lqOMwBDUruU7J2zAFXxhQgDfyt/o/MAXpsDyi5e/TvQWCHK2NCOK3kZEQ62UIw+dylymuAazDfEJ/UYobiziLCME/qcd+s5BHMick3UwiyTmngiKuGw4bAPiXPcKW0DLTu33C46oQ54Dsl3+JKaRncrOTtUSpuIBh7Q0hSsxp8SzD+H4laeYdS/myO+nXIp+paT/pbMb9Gp3jSk5eFmGHvBKv+xGidrx2eDUr/R550FCSB5PbzfZOvRZzQ5kH3bGTCy+ie50FHUSxWRqSRFJdvxgE/KL2dEegsiA6K9uM/PfWe0ncSMxNVFS5HdmwyRu3AbfpLs07pGQEe96SnZFLIN0HGsB7cBkjjgHcwO9/usH0nLMJMhP4DPEzlZw1mIW+V7nwH2RuvY4IFyNqvje0C7qR0R8xAsk32vkI70vlZyPK30oXhLmlFdmzsHaBeZGm8Dbg4x33jkU2Pp5Ct8CHr/lOYY/5zVfcqshSuHP3pJG1VqAeeA/4j/5bYKWSzpAc5IpPvuhHgE7Jn+5dD7vkYhwmScmlCAqFM6qqUXxp5xW/K03YC2BjSRjdjwAkgxqaQ1HUXksayjR0AfgHeB5ZQ3FKaUvcPImnydzGP5XQj+cIxRwNyqOIK5EOmnBT6CwQdfUOVP8ZZ4oRKWUPu/Qk4T5wwn6CDQ8ADVv0574RazKTIEPCgdc0574Rm4GeCDg4jEajGdsJW/OxYV42pwF5MJyyxrrGdYJ9mOetpwoxAh8nenX5R1X8VqXUR0YjsS2gnPKrqddzQE7l1ETEZ2EnQ0TPIcplC0vmZ8k3VMjAKJiHnkQuFyXdXzbqImAh8Q+7OR3qapJrUIcf1tgC7gQ8wD3HExMTExMTEZPM/eXjdG+zPBvYAAAAASUVORK5CYII="></img>
      </button>
    </div>)
}

export default Search;