
enum Category {
    Business_analyst = 'Business analyst',
    Developer = 'Developer',
    Designer = 'Designer',
    QA = 'QA',
    Scrum_master = 'Scrum master',
  }
  
  function getAllWorkers(){
    let workers = [
      { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer, id: 1},
      { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.QA, id: 2},
      { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA, id: 3},
      { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id: 4}
    ];
    return workers;
  }
  
  // Task 1.1
  function logFirstAvailable(workers: { Name: string; surname: string; available: boolean; salary: number; category: Category }[] = getAllWorkers()): void {

    let numberOfWorkers: number = workers.length;
    console.log(`Кількість робітників: ${numberOfWorkers}`);
  
    for (const worker of workers) {
      if (worker.available) {
        console.log(`Доступний робітник: ${worker.Name} ${worker.surname}`);
        break;
      }
    }
  }
  
  const workersCollection = getAllWorkers();
  logFirstAvailable(workersCollection);

  // Task 1.2
  function getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
    let workers = getAllWorkers();
    let workerSurnames: Array<string> = [];
    for (const worker of workers) {
      if (worker.category === category) {
        workerSurnames.push(`${worker.surname}`);
      }
    }
    return workerSurnames;
  }
  
  function logWorkersNames(names: Array<string>): void {
    names.forEach(name => {console.log(name)});
  }
  
  const categoryToFilter = Category.QA;
  console.log(`\nРобітники з категорією ${Category[categoryToFilter]}:`);
  const Names = getWorkersNamesByCategory(categoryToFilter);
  logWorkersNames(Names);

// Task 1.3

function getWorkerByID (id: number){
  let worker = getAllWorkers().find(worker => worker.id == id);
  if(!worker){return []};
  return [worker.Name, worker.surname, worker.salary];
};

console.log(`\nРобітники з категорією ${Category[Category.Developer]}:`);
getAllWorkers().forEach(worker => {
  if(worker.category == Category.Developer){
    console.log(`${worker.Name} ${worker.surname}`);
  }
});

console.log(`Робітник з ID 1: ${getWorkerByID(1)}`);

// Task 1.4
function createCustomerID(name: string, id: number):string {
    return `${name} ${id}`;
} 

let myID: string = createCustomerID('Ann', 5);
console.log(`\n ID Замовника: ${myID}`);
let IdGenerator = (name: string, id: number):string => `${name} ${id}`;
IdGenerator = createCustomerID;
console.log(` ID Замовника: ${createCustomerID('Tony', 6)}`);

// Task 1.5
function createCustomer(name: string, age?: number, city?: string) {
  console.log(`Ім'я: ${name}`);
  if (age !== undefined) {
    console.log(`Вік: ${age}`);
  }
  if (city !== undefined) {
    console.log(`Місто проживання: ${city}`);
  }
}

function checkoutWorkers(customer: string, workerIDs: number []) : Array<string> {
  let workers = getAllWorkers();
  let result: Array<string> = [];
  workers.forEach(worker => {
    if (workerIDs.includes(worker.id) && worker.available) {
      result.push(`${worker.Name} ${worker.surname}`);
    }
  })
  console.log(customer);
  return result;
}

console.log('');
createCustomer('Travis');
console.log('');
createCustomer('Tyler', 20);
console.log('');
createCustomer('Emma', 18, 'Toronto');

console.log('\nРобітники з категорією за замовчуванням:');
logWorkersNames(getWorkersNamesByCategory());

console.log('');
logFirstAvailable();

console.log('');
let myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(worker => {
  console.log(`${worker}`);
})
