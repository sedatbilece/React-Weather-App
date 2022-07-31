import './App.css';

export default function ShowData({data}){




    return (<div className='ShowData'>
        <div className='ShowData-middle'>
        <div > <h4>{data.location.name} </h4><h5>{data.location.country}</h5> </div>
        <div><h1> {data.current.temp_c}°C</h1></div>
        </div>

        <div className='ShowData-middle2'>
            <div>{data.current.condition.text}</div>
            <div><img src={data.current.condition.icon} alt="text"></img>   </div>
        </div>

        <div className='ShowData-bottom'>

            <div> <h3>feelslike</h3> {data.current.feelslike_c}°C </div>
            <div> <h3>humidity</h3> %{data.current.humidity} </div>
            <div> <h3>wind </h3> {data.current.wind_kph} k/h </div>
            
        </div>

    </div>)
}