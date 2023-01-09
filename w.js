const apiKey = '5e39583e2fd9b5bafefbda0c82618c1a'; // Replace with your own API key'
var city;
var state;
var url;
var dd = document.querySelector('#data');
var input = document.querySelector('#city');
input.addEventListener('change', (event) => {
  city = event.target.value;
  console.log("ret".includes("t"));
  if(city.includes(",")){
    state = city.substring(city.indexOf(",")+1,city.length);
    city = city.substring(0,city.indexOf(","));
     url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${apiKey}&units=imperial`;
     console.log(state);
     console.log(city);
  }
  else{
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  }

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Data received from the API
    dd.innerHTML = `<h3>Temperature: ${data.main.temp}°F</h3>` + 
  `<h3>H: ${data.main.temp_max}°F</h3>` + `<h3>L: ${data.main.temp_min}°F</h3>`;
    
  })
  .catch(error => {
    console.error('wweq'); // An error occurred
  });
  //var dat = JSON.parse(data);
  //console.log(dat.main.temp)

  //dd.innerHTML = `<h3> 3 </h3>`;
  
});
