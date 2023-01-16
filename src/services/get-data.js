import { cityName, paragraph, cityScore } from "./DOM-elements";
import ApexCharts from "apexcharts";
import { options } from "./chart";
export function getData(input, container){
    
    let inputValue = input.value;

    //Fetch link wants cities names divided by '-', so I replaced 
    //spaces, dots and comas thanks to split and join methods
    let cityArray = inputValue.split(' '); 
    let link = cityArray.join('-').toLowerCase();
    cityArray = link.split(',');
    link = cityArray.join('')
    cityArray = link.split('.');
    link = cityArray.join('');
    
    fetch(`https://api.teleport.org/api/urban_areas/slug:${link}/scores/`)
    .then((response) => response.json())
    .then((jsonData) => {
      //entering new data
      cityName.textContent = inputValue;
      paragraph.innerHTML = jsonData.summary;
      cityScore.innerHTML = 'City Score: ' + Math.round(10*jsonData.teleport_city_score)/10 + '/100';
      container.append(cityName, paragraph, cityScore);

      jsonData.categories.forEach(function (category){
          let score = category.score_out_of_10;
          let roundedScore = Math.round(10*score)/10;
          options.series[0].data.push(roundedScore);
          options.xaxis.categories.push(category.name);
          options.colors.push(category.color);
      
        })

        //creating a new chart
        let chartContainer = document.createElement('div');
        chartContainer.setAttribute('id', 'chart');
        container.append(chartContainer);
        let chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render(); 

        window.scrollTo({
          top : container.getBoundingClientRect().top,
          behavior: 'smooth'
      })
    })
    .catch((error) => {
      paragraph.innerHTML = 'Sorry, this city is not in our database. Please check for spelling error. Remember to use english names for the research. If you need a list of all cities available go to <a href="./all-cities/all_cities.html">All Cities</a>.';
      cityScore.innerHTML = '';

      input.style.border = '2px solid red';
      input.onfocus = function(){
        input.style.border = '2px solid green';
      }
      window.scrollTo({
        top : 200,
        behavior: 'smooth'
      })
    })
}