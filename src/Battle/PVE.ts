import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(protected player: Fighter, protected monsters: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    for (let index = 0; index < this.monsters.length; index += 1) {
      const monster = this.monsters[index];

      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        
        monster.attack(this.player);
      }
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}