export class BaseUser {
    id!: number | string;
    firstName!: string;
    lastName!: string;
    age!: number;

    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  
    isAdult() {
      return this.age && this.age > 36 && this.age < 60;
    }

}