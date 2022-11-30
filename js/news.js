  async function news_api(){

    let city;

    if (document.getElementById('japan').checked == true) {
      city = 'JP';

    } else if (document.getElementById('uk').checked == true) {
      city = 'GB';


    } else if (document.getElementById('us').checked == true) {
      city = 'US';

    } else if (document.getElementById('canada').checked == true) {
      city = 'CA';
    }
    console.log(location);


    let base_url="https://news-api14.p.rapidapi.com/";

 let end_point="top-headlines";

 let url=base_url+end_point;

 let url_par="?country="+city+"&lang=en-US&limit=5";

 let url_params=url+url_par;

 let options=

 {

    method:'GET',

     headers:{
		'X-RapidAPI-Key':'ee10acdc04msh5f7adb96ded09d0p19f96cjsna26b53a0ba26',
		'X-RapidAPI-Host':'news-api14.p.rapidapi.com'

 }

 };

 let response = await fetch(url_params,options);

 let data = await response.json();



let table= '';

  let news_data = data.articles;
  let len = news_data.length;

  console.log(data);

  for (let i = 0; i < len; i++) {
    table += `<tr>`;

    table += `<td>` + news_data[i].title + `</td>`;

    table += `<td>` + news_data[i].published_date + `</td>`;

    table += `<td>` + news_data[i].url + `</td>`;

    table += `</tr>`;
  }

  document.getElementById('news').innerHTML = table;
}
