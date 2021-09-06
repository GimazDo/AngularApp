import {Component, OnInit} from '@angular/core';
import {Semester, Student} from "./student";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {StudentService} from "./student.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public students: Student[] = [];

  constructor(private studentService: StudentService) {

  }
  ngOnInit() {
    this.getStudents();
  }

  public getStudents():void
  {
    this.studentService.getStudents().subscribe(
      (data: Student[] ) =>
      {
        console.log(data);
        this.students = data as Student[];
        console.log(this.students);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
}
