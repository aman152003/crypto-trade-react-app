import React,{useState,useEffect,useContext} from 'react'
import './Trending.scss'

import TrendingCrypto from '../../components/TrendingCrypto/TrendingCrypto'
import Loading from '../../components/Loading/Loading'
import {AppContext} from '../../components/AppContext'

function Trending() {
    const [trendingList,setTrendingList] = useState([]);
    const {setIsNavToggled} = useContext(AppContext);

    const fetchTrendingList = async() => {
        try{
            const result = await fetch('https://api.coingecko.com/api/v3/search/trending');
            const data = await result.json();
            setTrendingList(data);
        }
        catch(err){
            alert('Something bad happened! Please try again...');
        }
    }

    useEffect(()=>{
        fetchTrendingList()
        setIsNavToggled(false);
    },[])
    if(trendingList.length === 0){
        return <Loading />
    }else{
        return (
            <div className='trending'>
               {trendingList.coins.map(data => {
                return <TrendingCrypto id={data.item.id} name={data.item.name} symbol={data.item.symbol} image={data.item.large} rank={data.item.market_cap_rank} />
                })}
            </div>
        )
    }
}

export default Trending
