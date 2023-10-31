const greenColorClass = "bg-green-500 text-white";
const yellowColorClass = "bg-yellow-500 text-gray-800";
const redColorClass = "bg-red-500 text-white";
const purpleColorClass = "bg-purple-500 text-white";

const AirQualityInfo = ({ title, pm25, pm10  }: any) => (
  <div className="bg-gray-800 text-white shadow-xl p-6 rounded-lg border border-gray-700 text-center mt-4">
    <p className={`text-lg font-medium ${pm25 <= 50 ? greenColorClass : pm25 <= 100 ? yellowColorClass : pm25 <= 150 ? redColorClass : purpleColorClass}`}>
      {title}: {pm25}
    </p>
    <p className={`text-lg font-medium ${pm10 <= 50 ? greenColorClass : pm10 <= 100 ? yellowColorClass : pm10 <= 150 ? redColorClass : purpleColorClass}`}>
      {title}: {pm10}
    </p>
  </div>
);


export default AirQualityInfo