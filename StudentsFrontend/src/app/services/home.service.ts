import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrlHome = environment.apiUrl + '/students'
  apiUrlNews = environment.apiUrl + '/news'
  apiUrlGrades = environment.apiUrl + '/students'

  constructor(private http: HttpClient) { }

  getAllStudents() {
    let API_URL = `${this.apiUrlHome}`;
    let response = this.http.get<JSON>(API_URL);
    return response;
  }

  getAllGrades() {
    let API_URL = `${this.apiUrlGrades}/profile/1/grades`;
    let response = this.http.get<JSON>(API_URL);
    return response;
  }

  putGrade(body: any) {
    let API_URL = `${this.apiUrlGrades}/grades/edit`;

    let response = this.http.post<JSON>(API_URL, body);

    return response;
  }

  postGrade(body: any) {
    let API_URL = `${this.apiUrlGrades}/grades`;

    let response = this.http.post<JSON>(API_URL, body);

    return response;
  }

  deleteGrade(id: any) {
    let API_URL = `${this.apiUrlGrades}/grades/${id}`;

    let response = this.http.delete<JSON>(API_URL);

    return response;
  }

}
