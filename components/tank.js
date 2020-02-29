import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js'


const tankBuilder = () => {

    //import data from get alivepersons
const persons = personData.getAlivePersons();
let domString = ''
domString += '<div class="">';
domString += '<div class="card-header">SHARK TANK</div>';
domString += '<ul class="list-group list-group-flush">';

  //for each loop that gets each person loops through and prints them as list item. used temperaliteral in place of person's name in domstring
persons.forEach((person) => {
    domString += `<li class="list-group-item">${person.name}</li>`;
});

  domString += '</ul>';
  domString += '</div>';

utils.printToDom('tank', domString);

};

export default { tankBuilder }