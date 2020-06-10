import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
departments: Department[];
  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe( (data: Department[]) => this.departments = data, err => console.log(err));
  }
  deleteDepartment(id: string){
    console.log('Department deleted');
  }

}
