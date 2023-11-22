import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: { name: string, grade: number }[] = [];
  studentName: string = '';
  studentGrade: number = 0;

  addStudent() {
    if (this.studentName.trim() !== '' && this.studentGrade >= 0 && this.studentGrade <= 100) {
      this.students = [...this.students, { name: this.studentName, grade: this.studentGrade }];
      this.studentName = '';
      this.studentGrade = 0;
    }
  }
}
