import React,{useEffect,useContext} from 'react'
import './Home.scss'

import Crypto from '../../components/Crypto/Crypto'
import Search from '../../components/Search/Search'
import Loading from '../../components/Loading/Loading'
import {AppContext} from '../../components/AppContext'

function CryptoList() {
    const {cryptoData,setCryptoData,searchTerm,setIsNavToggled} = useContext(AppContext);
    const fetchCryptoData = async() => {
        try{
            const result = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false');
            const data = await result.json();
            setCryptoData(data);
        }
        catch (err) {
            alert('Something bad happened! Please try again...');
        }
    }
    useEffect(()=>{
        fetchCryptoData()
        setIsNavToggled(false);
    },[])
    return (
        <div className="home">
            <div className="home-search">
                <Search />
            </div>
            <div className="crypto-heading">
                <div className="crypto-heading-left">
                    <p className="left">Symbol</p>
                    <p className="left">Acronym</p>
                    <p className="left">Price</p>
                </div>
                <div className="crypto-heading-right">
                    <p className="right change">24H Change</p>
                    <p className="right">24H High</p>
                    <p className="right">24H Low</p>
                    <p className="right">Rank</p>
                    <p className="empty"></p>
                </div>
            </div>
            <div className="crypto-list">
                {cryptoData.filter((c)=>{
                    if(searchTerm === ''){
                        return c;
                    }else if(c.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return c;
                    }
                }).map(data => {
                    return <Crypto id={data.id} image={data.image} symbol={data.symbol} price={data.current_price} high={data.high_24h} low={data.low_24h} change={data.price_change_percentage_24h} rank={data.market_cap_rank}/>
                })}
            </div>
        </div>
    )
}

export default CryptoList
