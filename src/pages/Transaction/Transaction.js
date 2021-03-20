import React,{useState,useEffect,useContext} from 'react'
import {Line} from 'react-chartjs-2'
import './Transaction.scss'

import {AppContext} from '../../components/AppContext'
import Button from '../../components/Button'
import Loading from '../../components/Loading/Loading'

function Transaction() {
    const [chartData, setChartData] = useState([]);
    const [data1,setData1] = useState([]);
    const {id} = useContext(AppContext)

    const fetchChartData = async() => {
        const result = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`)
        const data = await result.json()
        setChartData(data)

        const result1 = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&sparkline=false`)
        const response = await result1.json()
        setData1(response[0])
    }

    useEffect(()=>{
        fetchChartData()
    },[])
    
    if(chartData.length === 0 || data1.length === 0){
        return  <Loading />
    }
    else{
        return (
            <div className='transaction'>
                <div className="chart">
                    <Line
                        data={{
                            labels: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7','Current Price'],
                            datasets: [
                                {
                                    label: 'Last 7 Days Record',
                                    data: [chartData.prices[0][1],chartData.prices[1][1],chartData.prices[2][1],chartData.prices[3][1],chartData.prices[4][1],chartData.prices[5][1],chartData.prices[6][1],chartData.prices[7][1]],
                                    backgroundColor: '#0A0C1C',
                                    borderColor: '#1db489',
                                    borderWidth: 2
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}   
                    />
                </div>
                <div className="crypto-data">
                    <div className="name">
                        <img src={data1.image} alt="bitcoin" />
                        <h2>{data1.name} ({data1.symbol.toUpperCase()})</h2>
                    </div>
                    <div className="extra-data">
                        <div className="row">
                            <div className="price">
                                <h3>Price</h3>
                                <p>Current Price : <span className="value">{data1.current_price || 'no data'}</span></p>
                                <p>24h High : <span className="value">{data1.high_24h || 'no data'}</span></p>
                                <p>24h Low :  <span className="value">{data1.low_24h || 'no data'}</span></p>
                                <p>24h Price Change : <span className="value">{data1.price_change_24h || 'no data'}</span></p>
                                <p>24h Price Change Percentage : <span className="value">{data1.price_change_percentage_24h || 'no data'}</span></p>
                            </div>
                            <div className="market-cap">
                                <h3>Market Cap</h3>
                                <p>Market Cap Rank : <span className="value">{data1.market_cap_rank || 'no data'}</span></p>
                                <p>Market Cap : <span className="value">{data1.market_cap || 'no data'}</span></p>
                                <p>Fully Diluted Valuation : <span className="value">{data1.fully_diluted_valuation || 'no data'}</span></p>
                                <p>24h Market CapChange : <span className="value">{data1.market_cap_change || 'no data'}</span></p>
                                <p>24h Market Cap Change % : <span className="value">{data1.market_cap_change_percentage_24h || 'no data'}</span></p>
                                <p>Total Volume : <span className="value">{data1.total_volume || 'no data'}</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="supply">
                                <h3>Supply</h3>
                                <p>Total Supply : <span className="value">{data1.total_supply || 'no data'}</span></p>
                                <p>Max Supply : <span className="value">{data1.max_supply || 'no data'}</span></p>
                                <p>Circulating Supply : <span className='value'>{data1.circulating_supply || 'no data'}</span></p>
                            </div>
                            <div className="all-time-change">
                                <h3>All Time Change</h3>
                                <p>ATH : <span className='value'>{data1.ath || 'no data'}</span></p>
                                <p>ATH Change % : <span className='value'>{data1.ath_change_percentage || 'no data'}</span></p>
                                <p>ATH Date : <span className='value'>{data1.ath_date || 'no data'}</span></p>
                                <p>ATL : <span className='value'>{data1.atl || 'no data'}</span></p>
                                <p>ATL Change % : <span className='value'>{data1.atl_change_percentage || 'no data'}</span></p>
                                <p>ATL Date : <span className='value'>{data1.atl_date || 'no data'}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="transaction-buttons">
                        <div className="buy-btn">
                            <Button name="Buy" bgColor='var(--Lime-Green)' />
                        </div>
                        <div className="sell-btn">
                            <Button name="Sell" bgColor='var(--Lime-Green)' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transaction;
