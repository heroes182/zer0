import regions from '../assets/regions.json';
import heroes from '../assets/heroes.json';
import monsters from '../assets/monsters.json';
import equipment from '../assets/equipment.json';

const grimoire = {
  heroes,
  monsters,
  equipment
}

export default (Vue) => {
    Object.defineProperties(Vue.prototype, {
        $Grimoire: {
            get () {
                return grimoire;
            }
        }
    });
};
