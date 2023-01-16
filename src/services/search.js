import { searchBtn } from "./DOM-elements";
import { getData } from "./get-data";
import { options } from "./chart";


export function search(){
    searchBtn.addEventListener('click', function(){

        // deleting previous research data from chart
        options.series[0].data = [];
        options.xaxis.categories = [];
        options.colors = [];

        //removing previous container
        let oldContainer = document.querySelector('.result-container');
        if (oldContainer) {
            oldContainer.remove();
        };
        let resultContainer = document.createElement('div');

        resultContainer.classList.add('result-container');
        document.body.append(resultContainer);

        let userInput = document.getElementById('user-input');

        getData(userInput, resultContainer);  // service
    })
}