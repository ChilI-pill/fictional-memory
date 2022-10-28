async function covid_api(){
     
  let city;
  
     
      if (document.getElementById('japan').checked == true) {
        city = 'japan';
       
      } else if (document.getElementById('uk').checked == true) {
        city = 'uk';
    
       
      } else if (document.getElementById('us').checked == true) {
        city = 'usa';
  
      } else if (document.getElementById('canada').checked == true) {
        city = 'canada';
      } 
      console.log(location);
   
  
      let base_url="https://covid-193.p.rapidapi.com/";
  
   let end_point="statistics";
  
   let url=base_url+end_point;
  
   let url_par="?country="+city;
  
   let url_params=url+url_par;
  
   let options=
  
   {
  
      method:'GET',
  
       headers:{
          'X-RapidAPI-Key':'ee10acdc04msh5f7adb96ded09d0p19f96cjsna26b53a0ba26',
          'X-RapidAPI-Host':'covid-193.p.rapidapi.com'
  
   }
  
   };
  
  
  
   let response = await fetch(url_params,options);
  
   let data = await response.json();
    
   
   let table= '';

       
    let covid_data = data.response[0].cases;
    let len = covid_data.length;
    console.log(covid_data.active);
  
  

      table += `<tr>`;
  
      table += `<td>` + covid_data.active + `</td>`;

      table += `<td>` + covid_data.critical + `</td>`;

      table += `<td>` + covid_data.recovered + `</td>`;
  
      table += `</tr>`;
    
  
    document.getElementById('covid').innerHTML = table;
  }
  
  
  