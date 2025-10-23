import { useState, useEffect } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox.jsx';
import WeatherButton from "./component/WeatherButton.jsx";


// 1. 앱 실행 시 현재 위치기반 날씨 노출
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼 클릭 시 도시별 날씨 노출
// 5. 현재 위치 버튼 클릭 시 다시 현위치 기반 날씨 노출
// 6. 데이터를 들고오는 동안 로딩 스피너 누출
// 선택. 초기 이미지 및 날씨별 이미지 노출(선택)
function App() {

  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)

      console.log('lat: ', lat, 'lon: ', lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const apiKeyVal = `5bae92620c690ba69b721cfa67366934`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyVal}&units=metric`
    console.log('url?? ', url);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>

    </div>
  )
}

export default App
