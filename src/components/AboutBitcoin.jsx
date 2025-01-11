const AboutBitcoin = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">What is Bitcoin?</h3>
        <p className="text-gray-600 mb-4">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate, accusantium nemo eaque quidem laudantium. Tempore quae corporis alias sequi repellendus.
        </p>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate, accusantium nemo eaque quidem laudantium. Tempore quae corporis alias sequi repellendus.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate, accusantium nemo eaque quidem laudantium. Tempore quae corporis alias sequi repellendus.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold mb-4">Already Holding Bitcoin?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-4 flex items-center gap-4">
            <img src="/assets/profit-calculator.svg" alt="Calculate Profits" className="w-32 h-32 object-contain" />
            <div className="text-white">
              <h4 className="font-bold text-xl mb-2">Calculate your Profits</h4>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">Check Now →</button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-400 to-orange-500 rounded-lg p-4 flex items-center gap-4">
            <img src="/assets/tax-planning.svg" alt="Calculate Tax" className="w-32 h-32 object-contain" />
            <div className="text-white">
              <h4 className="font-bold text-xl mb-2">Calculate your tax liability</h4>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">Check Now →</button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 border-t border-gray-200 pt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate, accusantium nemo eaque quidem laudantium. Tempore quae corporis alias sequi repellendus.
      </p>
    </div>
  );
};

export default AboutBitcoin;
