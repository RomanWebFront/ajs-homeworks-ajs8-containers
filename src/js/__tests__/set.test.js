import {Team, Character} from '../set.js';
  
  test('set', () => {
    const name = new Character('Виктор');
    const name1 = new Character('Витек');
    const name2 = new Character('Владимир');
    const name3 = new Character('Володя');

    const team = new Team();
    const team2 = new Team();
    
    team.add(name);
    team.add(name1);

    team2.add(name2);
    team2.add(name3);

    expect(team.toArray()).toEqual([name, name1]);
    expect(team2.toArray()).toEqual([name2, name3]);

    team.addAll(name, name1);
    team2.addAll(name2, name3);

    expect(team.toArray()).toEqual([name, name1]);
    expect(team2.toArray()).toEqual([name2, name3]);
  });
  