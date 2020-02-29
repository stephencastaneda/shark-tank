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
const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
//jquery that adds click event to bite-me class
    $('#bite-me').click(sharkAttackEvent)
};

init();


