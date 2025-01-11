import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const YouMayAlsoLike = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        
        // Get price data and sparkline for trending coins
        const coinIds = response.data.coins.map(coin => coin.item.id).join(',');
        const [priceResponse, marketDataResponse] = await Promise.all([
          axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`
          ),
          axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&sparkline=true`
          )
        ]);

        const coinsWithData = response.data.coins.map(coin => ({
          ...coin,
          priceData: priceResponse.data[coin.item.id],
          marketData: marketDataResponse.data.find(market => market.id === coin.item.id)
        }));

        setCoins(coinsWithData.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
        setError('Failed to fetch coin data');
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) {
    return (
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-64 h-40 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 min-w-max">
        {coins.map((coin) => (
          <Link
            to={`/cryptocurrencies/${coin.item.id}`}
            key={coin.item.id}
            className="w-64 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
              <span className={`text-sm ${coin.priceData?.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.priceData?.usd_24h_change >= 0 ? '▲' : '▼'} {Math.abs(coin.priceData?.usd_24h_change || 0).toFixed(2)}%
              </span>
            </div>
            <div className="font-semibold">
              ${coin.priceData?.usd.toLocaleString()}
            </div>
            {coin.marketData?.sparkline_in_7d?.price && (
              <svg
                className="w-full h-16 mt-2"
                viewBox={`0 0 ${coin.marketData.sparkline_in_7d.price.length} 100`}
                preserveAspectRatio="none"
              >
                <path
                  d={`M0 ${100 - (coin.marketData.sparkline_in_7d.price[0] / Math.max(...coin.marketData.sparkline_in_7d.price) * 100)} ${coin.marketData.sparkline_in_7d.price
                    .map((price, i) => `L${i} ${100 - (price / Math.max(...coin.marketData.sparkline_in_7d.price) * 100)}`)
                    .join(' ')}`}
                  fill="none"
                  stroke={coin.priceData?.usd_24h_change >= 0 ? '#22c55e' : '#ef4444'}
                  strokeWidth="2"
                />
              </svg>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
