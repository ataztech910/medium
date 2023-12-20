import { plainToInstance } from 'class-transformer';
import { User } from './utils/user';
import { UserWithAge } from './utils/user-with-age';
import { UserWithStringId } from './utils/user-id-is-string';

export default function Home() {
  const data = [
  {"id": 1, "firstName": "Alice", "lastName": "Smith", "age": 35, "email": "alice@mail.com"},
  {"id": 2, "firstName": "Bob", "lastName": "Johnson", "age": 42, "email": "bob@mail.com"},
  {"id": 3, "firstName": "Charlie", "lastName": "Brown", "age": 28, "email": "charlie@mail.com"},
  {"id": 4, "firstName": "David", "lastName": "Miller", "age": 52, "email": "david@mail.com"},
  {"id": 5, "firstName": "Eva", "lastName": "Wilson", "age": 24, "email": "eva@mail.com"},
  {"id": 6, "firstName": "Frank", "lastName": "Jones", "age": 38, "email": "frank@mail.com"},
  {"id": 7, "firstName": "Grace", "lastName": "White", "age": 45, "email": "grace@mail.com"},
  {"id": 8, "firstName": "Henry", "lastName": "Taylor", "age": 31, "email": "henry@mail.com"},
  {"id": 9, "firstName": "Isabel", "lastName": "Martin", "age": 29, "email": "isabel@mail.com"},
  {"id": 10, "firstName": "Jack", "lastName": "Davis", "age": 48, "email": "jack@mail.com"},
  {"id": 11, "firstName": "Karen", "lastName": "Hill", "age": 36, "email": "karen@mail.com"},
  {"id": 12, "firstName": "Liam", "lastName": "Moore", "age": 41, "email": "liam@mail.com"},
  {"id": 13, "firstName": "Mia", "lastName": "Adams", "age": 27, "email": "mia@mail.com"},
  {"id": 14, "firstName": "Noah", "lastName": "Clark", "age": 33, "email": "noah@mail.com"},
  {"id": 15, "firstName": "Olivia", "lastName": "Baker", "age": 50, "email": "olivia@mail.com"},
  {"id": 16, "firstName": "Peter", "lastName": "Fisher", "age": 22, "email": "peter@mail.com"},
  {"id": 17, "firstName": "Quinn", "lastName": "Cooper", "age": 39, "email": "quinn@mail.com"},
  {"id": 18, "firstName": "Rachel", "lastName": "Morgan", "age": 46, "email": "rachel@mail.com"},
  {"id": 19, "firstName": "Samuel", "lastName": "Young", "age": 32, "email": "samuel@mail.com"},
  {"id": 20, "firstName": "Tara", "lastName": "Evans", "age": 44, "email": "tara@mail.com"}
];
  let users = plainToInstance(User, data);
  let usersWithAge = plainToInstance(UserWithAge, data);
  let usersWithStringId = plainToInstance(UserWithStringId, data, { enableImplicitConversion: true });

  console.log(users);
  console.log(usersWithAge);
  console.log(usersWithStringId);

  return (
    <main className="container  mx-auto">
      <div className="flex gap-10">
      <div>
        <h2>Show User status</h2>
        <ul className="list-none md:list-disc">
          {
            users && users.map((user: User) => {
              return ( 
                <li key={user.id}>
                    { user.getHisMajestyByName()} | { user.isAdult() ? 'Adult' : 'Not adult' }
                </li>
              )
            })
          }
        </ul>
      </div>


      <div>    
        <h2>Show User ages</h2>
        <ul className="list-none md:list-disc">
          {
            usersWithAge && usersWithAge.map((user: UserWithAge) => {
              return ( 
                <li key={user.customerId}>
                    { user.getName() } | { user.getAgePlusString() }
                </li>
              )
            })
          }
        </ul>
      </div>
      </div>
    </main>
  )
}
