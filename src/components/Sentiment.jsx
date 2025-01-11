const Sentiment = () => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Key Events</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {/* Event Card 1 */}
          <div className="bg-blue-50 rounded-lg p-4 min-w-[456px]">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-green-50 rounded-lg p-4 min-w-[456px]">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Analyst Estimates</h3>
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-600">76%</span>
          </div>
          <div className="flex-grow space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 text-right text-gray-500">Buy</span>
              <div className="flex-grow h-2 bg-green-500 rounded"></div>
              <span className="w-8 text-gray-500">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-right text-gray-500">Hold</span>
              <div className="w-[8%] h-2 bg-gray-300 rounded"></div>
              <span className="w-8 text-gray-500">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-right text-gray-500">Sell</span>
              <div className="w-[16%] h-2 bg-red-500 rounded"></div>
              <span className="w-8 text-gray-500">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
