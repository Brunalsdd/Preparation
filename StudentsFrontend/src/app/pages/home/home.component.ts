import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public id: any;
  public name: any;
  public studentList: any;
  public gradeList: any;
  public newGrade: any;
  public newGradeCourse: any;
  displayedColumns: string[] = ['category', 'description'];


  constructor(private route: ActivatedRoute, private homeService: HomeService) {
    this.getAllStudents();
    this.getAllGrades();

  }

  getAllStudents() {
    this.homeService.getAllStudents().subscribe((response) => {
      this.studentList = response;
    });
  }

  getAllGrades() {
    this.homeService.getAllGrades().subscribe((response) => {
      this.gradeList = response;
    });
  }

  putGrade(id: any, course: any, grade:any) {
    let body = {
      id: id,
      course: course,
      grade: grade
    }
    console.log(body);
    this.homeService.putGrade(body).subscribe((response) => {
      console.log(response);
    });
  }
  
  postGrade(studentId: any, course: any, grade:any) {
    let body = {
      student: studentId,
      course: course,
      grade: grade
    }
    console.log(body);
    this.homeService.postGrade(body).subscribe((response) => {
      console.log(response);
    });
  }
    
  deleteGrade(id: any) {
    console.log(id);
    this.homeService.deleteGrade(id).subscribe((response) => {
      console.log(response);
    });
  }


  ngOnInit() { }



}
