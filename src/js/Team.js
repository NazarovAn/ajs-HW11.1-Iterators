export default class Team {
  constructor(name) {
    this.name = name;
    this.teamList = [{
      name: 'Zombie',
      type: 'ZombieType',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Demon',
      type: 'DemonType',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Undead',
      type: 'UndeadType',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }];
  }

  [Symbol.iterator]() {
    const team = this.teamList;
    let currentIndex = -1;
    return {
      next() {
        currentIndex += 1;
        if (team[currentIndex] === undefined) {
          return {
            done: true,
          };
        }
        return {
          value: team[currentIndex],
          done: currentIndex >= team.length,
        };
      },
    };
  }
}
