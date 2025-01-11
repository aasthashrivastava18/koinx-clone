const Tokenomics = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Initial Distribution</h3>
      <div className="flex items-center gap-8 mb-6">
        <div className="w-48 h-48 relative">
          {/* Pie chart representation */}
          <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
          <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}></div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate, accusantium nemo eaque quidem laudantium. Tempore quae corporis alias sequi repellendus.
      </p>
    </div>
  );
};

export default Tokenomics;
