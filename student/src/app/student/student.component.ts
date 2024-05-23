import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

    isAddNew: boolean =false;
    student=[
      {id:'1',first_name:'doshan',last_name:'krish',dob:'454545',gender:'male',address:'amparai',district:'amparai15454',contact_no:'565656',grade:'14'},
      {id:'1',first_name:'doshan',last_name:'krish',dob:'454545',gender:'male',address:'amparai',district:'amparai15454',contact_no:'565656',grade:'14'},
    ]
}
