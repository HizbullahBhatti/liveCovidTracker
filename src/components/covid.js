import React, { useEffect,useState } from 'react'

const Covid = () => {
    const[data,setData] = useState([])

    const getCoviddData = async () => {
        try{
            const res = await fetch('https://api.covid19api.com/country/pakistan')
            const data = await res.json()
            //console.log(data[data.length-1].Deaths)
            setData(data[data.length-1])
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getCoviddData()
    }, [])
  return (
    <>
    <section>
        <h1>Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'>
                            <span>Our</span>Country
                        </p>
                        <p className='card__total card__small'>PAKISTAN</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'>
                            <span>Total</span>Recovered
                        </p>
                        <p className='card__total card__small'>{data.Recovered}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'>
                            <span>Total</span>Death
                        </p>
                        <p className='card__total card__small'>{data.Deaths}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'>
                            <span>Total</span>Active
                        </p>
                        <p className='card__total card__small'>{data.Active}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'>
                            <span>Total</span>Confirmed
                        </p>
                        <p className='card__total card__small'>{data.Confirmed}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'>
                            <span>Last</span>Update
                        </p>
                        <p className='card__total card__small'>{data.Date}</p>
                    </div>
                </div>
            </li>
            
        </ul>
        </section>
    </>
  )
}

export default Covid