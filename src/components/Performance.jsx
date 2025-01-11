
const Performance = ({ cryptoData }) => {
  if (!cryptoData?.details?.market_data) return null;

  const market_data = cryptoData.details.market_data;
  
  const fundamentals = {
    'Market Cap': `$${market_data.market_cap?.usd?.toLocaleString() || 'N/A'}`,
    '24h Trading Volume': `$${market_data.total_volume?.usd?.toLocaleString() || 'N/A'}`,
    'Volume / Market Cap': market_data.total_volume?.usd && market_data.market_cap?.usd 
      ? (market_data.total_volume.usd / market_data.market_cap.usd).toFixed(4)
      : 'N/A',
    'Total Supply': `${market_data.total_supply?.toLocaleString() || 'N/A'} ${cryptoData.details.symbol?.toUpperCase() || ''}`,
    'Max Supply': `${market_data.max_supply?.toLocaleString() || 'N/A'} ${cryptoData.details.symbol?.toUpperCase() || ''}`,
    'Circulating Supply': `${market_data.circulating_supply?.toLocaleString() || 'N/A'} ${cryptoData.details.symbol?.toUpperCase() || ''}`
  };

  return (
    <div>
      {/* Price Range */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Today's Low</p>
            <p className="font-medium">${market_data.low_24h?.usd?.toLocaleString() || 'N/A'}</p>
          </div>
          <div className="flex-grow mx-4">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Today's High</p>
            <p className="font-medium">${market_data.high_24h?.usd?.toLocaleString() || 'N/A'}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">52W Low</p>
            <p className="font-medium">${market_data.low_52w?.usd?.toLocaleString() || 'N/A'}</p>
          </div>
          <div className="flex-grow mx-4">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-gray-500">52W High</p>
            <p className="font-medium">${market_data.high_52w?.usd?.toLocaleString() || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Fundamentals */}
      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Fundamentals</h3>
        <div className="grid md:grid-cols-2 gap-x-8">
          <div className="space-y-4">
            {Object.entries(fundamentals).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-500">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {Object.entries(fundamentals).slice(3).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-500">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
