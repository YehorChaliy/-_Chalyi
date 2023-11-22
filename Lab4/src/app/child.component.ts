import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() students: { name: string, grade: number }[] = [];
  groupAverage: number = 0;

  ngOnChanges() {
    this.calculateGroupAverage();
  }

  calculateGroupAverage() {
    const totalGrades = this.students.reduce((sum, student) => sum + student.grade, 0);
    this.groupAverage = this.students.length > 0 ? totalGrades / this.students.length : 0;
  }
}