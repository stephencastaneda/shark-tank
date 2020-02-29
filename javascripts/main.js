import tank from '../components/tank.js';
import graveyard from '../components/graveyard.js';
import personData from '../helpers/data/personData.js'


const sharkAttackEvent = () => {
    personData.randomMurder();
    //randomly kill someone in personData
    //then recall init to print again
    tank.tankBuilder();
    graveyard.buildGraveyard();
}

//click event
const reviveEvent = (e) => {
//pulling off the id
    const personId = e.target.id;
//passing it into the function personData
    personData.bringToLife(personId);
//once done it reruns both functions that build print to doms
    tank.tankBuilder();
    graveyard.buildGraveyard();
}
const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
//jQuery that adds click event to bite-me class
    $('#bite-me').click(sharkAttackEvent)
//jQuery targets the body of html and add a click on the revive-btn class
//if there is something with a class of revive-btn and it's clicked on run reviveEvent
    $('body').on('click', '.revive-btn', reviveEvent);
};

init();


