 async function weather_api(){

let city;

  if (document.getElementById('japan').checked == true) {
    city = 'toyko';
    
  } else if (document.getElementById('uk').checked == true) {
    city = 'london';

   
  } else if (document.getElementById('us').checked == true) {
    city = 'new york';
    
  } else if (document.getElementById('canada').checked == true) {
    city = 'toronto';
  } 
  console.log(location);


 let base_url="https://yahoo-weather5.p.rapidapi.com/";

 let end_point="weather";

 let url=base_url+end_point;

 let url_par="?location="+city+"&format=json&u=f";

 let url_params=url+url_par;

 let options=

 {

    method:'GET',

     headers:{
		'X-RapidAPI-Key':'ee10acdc04msh5f7adb96ded09d0p19f96cjsna26b53a0ba26',
		'X-RapidAPI-Host':'yahoo-weather5.p.rapidapi.com'

 }
 };


 let response = await fetch(url_params,options);

 let data = await response.json();


let table= '';


       

let weather_data = data.forecasts;
let len = weather_data.length;

console.log(data);

for (let i = 0; i < len; i++) {

  table += `<tr>`;

  table += `<td>` + weather_data[i].day + `</td>`;

  table += `<td>` + weather_data[i].high + `</td>`;

  table += `<td>` + weather_data[i].low + `</td>`;

  table += `</tr>`;
  
}

document.getElementById('weather').innerHTML = table;

}