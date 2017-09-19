import {Injectable} from '@angular/core'

@Injectable()
export class demoService{
    employeeDetails():any{
 let userTestStatus: {  name: string }[] = [
    {  "name": "Available" },
    {  "name": "Ready" },
    {  "name": "Started" }
];
return userTestStatus;
    }
addEmployeeDetails():void{
let data:['abc'];
data.unshift();
}

}