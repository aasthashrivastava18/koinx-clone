import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        
        // Get price data for trending coins
        const coinIds = response.data.coins.map(coin => coin.item.id).join(',');
        const priceResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`
        );

        const coinsWithPrices = response.data.coins.map(coin => ({
          ...coin,
          priceData: priceResponse.data[coin.item.id]
        }));

        setTrendingCoins(coinsWithPrices.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
        setError('Failed to fetch trending coins');
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-12 bg-gray-200 rounded"></div>
      ))}
    </div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {trendingCoins.map((coin) => (
        <Link
          to={`/cryptocurrencies/${coin.item.id}`}
          key={coin.item.id}
          className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-2">
            <img
              src={coin.item.small}
              alt={coin.item.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="font-medium">{coin.item.name}</span>
            <span className="text-sm text-gray-500">({coin.item.symbol.toUpperCase()})</span>
          </div>
          <div className={`px-2 py-1 rounded ${coin.priceData?.usd_24h_change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {coin.priceData?.usd_24h_change >= 0 ? '▲' : '▼'} {Math.abs(coin.priceData?.usd_24h_change || 0).toFixed(2)}%
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrendingCoins;
