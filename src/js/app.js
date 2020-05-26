import Team from './Team';

const testTeam = new Team('Hollow');

const iterator = testTeam[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const char of testTeam) {
  console.log(char);
}
