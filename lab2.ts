
interface Workers{
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:Category;
    markPrize:PrizeLogger;
}

enum Category {
    Business_analyst = 'Business analyst',
    Developer = 'Developer',
    Designer = 'Designer',
    QA = 'QA',
    Scrum_master = 'Scrum master',
  }

function getAllworkers() 
{
    let workers: Workers[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Designer, markPrize: setPrize},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.QA, markPrize: setPrize},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA, markPrize: setPrize},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, markPrize: setPrize}
    ]
    return workers;
}
 
//Task2.1
function getWorkerByID (id:number): Workers | undefined{

    return getAllworkers().find(el => el.id==id)

}

function printWorker (worker:Workers){

    console.log(`${worker.Name} ${worker.surname} got salary ${worker.salary}`)

}
  
  const worker = getWorkerByID(2);
  
  if (worker) {
    printWorker(worker);
  } else {
    console.log('The employee with the specified ID was not found');
  }

  //Task2.2

  interface PrizeLogger
  {
      (str:string):void; 
  }
  
  function setPrize(str:string) {
      console.log(str)
  }

  let logPrize: PrizeLogger = setPrize;
  console.log('');
  console.log(logPrize("prize"));

  //Task2.3
  interface Person{
    name:string;
    email:string;
}

interface Author extends Person{
    numBooksPublished:number;
}

interface Librarian extends Person{
    department:string;
    assistCustomer(custName:string):void;

}

let favoriteAuthor:Author= {name:"John",email:"john@gmail.com",numBooksPublished:404};
// let favoriteLibrarian:Librarian = {name:"Jack", email:"jack@gmail.com", department:"Department", assistCustomer:function tmp(name:string) {
//     console.log(name);
// }}

//Task2.4
class UniversityLibrarian implements Librarian{

    name:string;
    email:string;
    department:string;
    
    constructor(newName: string, newEmail: string, newDepartment: string) {
    this.name = newName;
    this.email = newEmail;
    this.department = newDepartment;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
let favoriteLibrarian:Librarian = new UniversityLibrarian("", "", "");
favoriteLibrarian.name = "Mike";
console.log('');
favoriteLibrarian.assistCustomer("Mr. Smith");

//Task2.5 and 2.7
abstract class ReferenceItem{

    // title:string;
    // year:number;

    // constructor(newTitle:string, newYear:number)
    // {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log("Creating new ReferenceItem...")

    // }

    static department:string = "English Department";
    private __publisher:string = '';

    constructor(public title:string, protected year:number){}

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }
    
    publisherGetter():string
    {

        return this.__publisher.toUpperCase();

    }

    publisherSetter(newPublisher:string):void
    {
        this.__publisher = newPublisher;
    }

   abstract printCitation():void;

}

// console.log('');
// let ref:ReferenceItem = new ReferenceItem("Title", 2023);
// ref.printItem();
// ref.publisherSetter("new york times");
// console.log(ref.publisherGetter());

//Task2.6
class Encyclopedia extends ReferenceItem{


    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition:${this.edition}`);
    }

    printCitation(){
        console.log("title - year");
    }
}  
let refBook:Encyclopedia = new Encyclopedia("Bunny", 2023, 3);
console.log('');
refBook.printItem();
refBook.printCitation();
