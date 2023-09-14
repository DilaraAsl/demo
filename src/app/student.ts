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
        
          
    }




