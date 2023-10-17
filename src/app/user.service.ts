export class UserService{
    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  counter:number=0;

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter++;
    console.log(this.counter)

  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter++;
    console.log(this.counter)

  }
}