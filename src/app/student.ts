// export- public
export class Student {
    // public String name;
    public name: string = 'Demo';
    //private int schoolNumber;
    private schoolNumber: number=12;
    // double averageGrade;
    averageGrade: number=25;
    // final boolean isActive; -readonly fina
    readonly isActive: boolean =false;
    // static int studentCount;
    static studentCount: number;

    // List<String> courses; []-> empty array
    courses: string[]= [];
    // List<Integer> grades;
    grades: number[]= [];
    
    // public Student(){}
    // Empty  Constructor in TypeScript: 

     constructor(){

     }

     /** public void assingCourse(String course, int grade) {
      *         System.out.printly(course)
      * }
    **/
     public assignCourse(course:string, grade:number): void {
        console.log(course);
        console.log(grade);
     }
     /** double calculateGrade(int grade){
      *       final int BASE=10;
      *        var result= grade*1.2*BASE;
      *     return result;
      * } */

    public calculateGrade(grade: number): number{

        const BASE: number=10;
        let result=grade*BASE*1.2;
        return result;

    }
    //String methods

    stringMethods(given: string): void{
        given.toLowerCase();
        given.split(",");
        given.trim();
        given.substring(1,5);
        given.indexOf('a');

        var result= `${this.name} is studying on ${this.averageGrade}`;
        result.charAt(0);
        result.length;

    }
    public arrayMethods(givenArray: number [], givenList: number []): void{

        givenArray[0]=10;

        givenArray.push(10); // pushes 10 , puts it at the end of the array
        givenArray.pop(); // pops from the end of the list
        givenArray.length*2;
        givenArray.forEach(n=>n*2);
        givenArray.findIndex(n=>n===10); // === equality , find index that equals to 10
        givenArray.find(n=>n===10);
        givenArray.slice(); // copy of the array
        givenArray.splice(10,1); // starting from 10 remove one element 
        givenArray.shift(); // removes the first element
        givenArray.unshift(); // insert at the beginning
        givenArray.reverse();

        const filteredArray=givenArray.filter(n=> n>0);
    
        const transformedArray=givenArray.map(n=>n*2).filter(n=>n%4);        
            
        }
        
        loopsInTypeScript(): void{

            // for loop

            for (let i=0; i<3; i++){
                console.log(i);
            }

            // forEach loop
            let arr: number[] = [10, 20, 30, 40];
            for(let val of arr){

                val+=10;
                console.log(val);

                let i=2;
                while(i<4){
                    console.log('something');
                    i++;
                }

                var x=2;
                do{
                    console.log('Do while block is executing');
                    x++;
                }
                while(x<4)



            }

        }

        ifElseStatementsInTypeScript(): void {
            let x=10, y=20;
            if (x>y){}
            else if(x<y) {}
            else if(x==y) {}
            else {}
            

        }
          
    }
    enum DAYS{

        SUNDAY, MONDAY, TUESDAY
    }

    class IEmployee{
       
         constructor(public id: number, public name: string) {
            
        }
    }

    let student= new Student();
    student.name='Joe';
    // in java we can create a new student in main method
    // in ts you can create a new object any where 

    

    class Employee extends IEmployee {
       constructor(id:number,name:string,public address:string){
        super(id,name);
       }
    
       
    }
    
    // Create an instance of the Employee class
    const emp = new Employee(1, "John Doe","234 somewhere street");
    
    // Access the properties defined in the interface
    console.log(emp.id);    // Output: 1
    console.log(emp.name);
    console.log(emp.address);  // Output: John Doe

    class Animal {
        constructor(public name: string) {
        }
    
        makeSound() {
            console.log(`${this.name} makes a sound`);
        }
    }
    
    class Dog extends Animal {
        constructor(name: string, public breed: string) {
            super(name); // Call the constructor of the parent class (Animal)
        }
    
        override makeSound() {
            super.makeSound(); // Call the makeSound method of the parent class
            console.log(`${this.name} barks`);
        }
    
        showInfo() {
            console.log(`${this.name} is a ${this.breed} dog`);
        }
    }
    
    const myDog = new Dog("Buddy", "Golden Retriever");
    myDog.makeSound(); // Output: Buddy makes a sound\nBuddy barks
    myDog.showInfo();  // Output: Buddy is a Golden Retriever dog
    

