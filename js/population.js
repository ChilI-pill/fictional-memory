async function population_api(){

    let city;
    
      if (document.getElementById('japan').checked == true) {
        city = 'Japan';
        
      } else if (document.getElementById('uk').checked == true) {
        city = 'United Kingdom';
    
      } else if (document.getElementById('us').checked == true) {
        city = 'United States';
        
      } else if (document.getElementById('canada').checked == true) {
        city = 'Canada';
      } 
      console.log(location);
    
    
     let base_url="https://world-population.p.rapidapi.com/";
    
     let end_point="population";
    
     let url=base_url+end_point;
    
     let url_par="?country_name="+city;
    
     let url_params=url+url_par;
    
     let options=
    
     {
    
        method:'GET',
    
         headers:{
            'X-RapidAPI-Key':'ee10acdc04msh5f7adb96ded09d0p19f96cjsna26b53a0ba26',
            'X-RapidAPI-Host':'world-population.p.rapidapi.com'
    
     }
    
     };
    
    
    
     let response = await fetch(url_params,options);
    
     let data = await response.json();
    
    
    let table= '';
    
           
    
    let population_data = data.body;
    
    console.log(data);
    
    
    
      table += `<tr>`;
    
      table += `<td>` + population_data.population + `</td>`;
    
      table += `<td>` + population_data.ranking + `</td>`;
    
      table += `<td>` + population_data.world_share + `</td>`;
    
      table += `</tr>`;
      
    
    
    document.getElementById('population').innerHTML = table;
    
    }