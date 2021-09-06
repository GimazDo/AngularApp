import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Semester, Student} from "./student";
import {environment} from "../environments/environment";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class StudentService
{
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getStudents(): Observable<Student[]>
  {
    return this.http.get<Student[]>(`${this.apiServerUrl}/students/getAll`);
  }


}
