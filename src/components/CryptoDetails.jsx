import { useState, useEffect } from 'react';
import axios from 'axios';
import TradingViewWidget from './TradingViewWidget';
import Performance from './Performance';
import Sentiment from './Sentiment';
import AboutBitcoin from './AboutBitcoin';
import Tokenomics from './Tokenomics';
import Team from './Team';
import YouMayAlsoLike from './YouMayAlsoLike';
import TrendingCoins from './TrendingCoins';

const CryptoDetails = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const [priceResponse, detailsResponse] = await Promise.all([
          axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true'),
          axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=true')
        ]);

        if (!priceResponse.data.bitcoin) {
          throw new Error('Cryptocurrency not found');
        }

        setCryptoData({
          ...priceResponse.data.bitcoin,
          details: detailsResponse.data
        });
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setError('Failed to fetch cryptocurrency data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-4 lg:px-8">
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
        <span>Cryptocurrencies</span>
        <span>{'>'}</span>
        <span className="text-gray-900">{cryptoData?.details?.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={cryptoData?.details?.image?.large} 
                alt={cryptoData?.details?.name} 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold">{cryptoData?.details?.name}</h1>
              <span className="text-gray-500 font-medium">{cryptoData?.details?.symbol?.toUpperCase()}</span>
              <span className="bg-gray-600 text-white px-3 py-2 rounded">Rank #{cryptoData?.details?.market_cap_rank}</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold">${cryptoData?.usd?.toLocaleString()}</h2>
                <span className={`px-2 py-1 rounded ${cryptoData?.usd_24h_change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {cryptoData?.usd_24h_change >= 0 ? '▲' : '▼'} {Math.abs(cryptoData?.usd_24h_change || 0).toFixed(2)}%
                </span>
              </div>
              <p className="text-gray-500">₹{cryptoData?.inr?.toLocaleString()}</p>
            </div>

            <TradingViewWidget symbol={cryptoData?.details?.symbol?.toUpperCase()} />
            
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Performance</h2>
              <Performance cryptoData={cryptoData} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Sentiment</h2>
            <Sentiment cryptoData={cryptoData} />
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">About {cryptoData?.details?.name}</h2>
            <AboutBitcoin cryptoData={cryptoData} />
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
            <Tokenomics cryptoData={cryptoData} />
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Team</h2>
            <Team />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[426px]">
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
            <YouMayAlsoLike currentCoin="bitcoin" />
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Trending Coins</h2>
            <TrendingCoins currentCoin="bitcoin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
