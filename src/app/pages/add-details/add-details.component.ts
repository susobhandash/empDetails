import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  value = '';
  empDetails = new Employee();
  projectDetails = new Project();
  positions: EmpRoleGroup[];
  projects: Projects[];
  managers: Emp[];
  architects: Emp[];
  skills: Skills[];
  employees: Emp[];

  constructor(
    private _adapter: DateAdapter<any>,
    private empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this._adapter.setLocale('en-GB');
    // this.positions = [
    //   {
    //     name: 'Development',
    //     role: [
    //       { value: 'ase', viewValue: 'Associate Software Engineer' },
    //       { value: 'se', viewValue: 'Software Engineer' },
    //       { value: 'sse', viewValue: 'Senior Software Engineer' },
    //       { value: 'ste', viewValue: 'Staff Engineer' },
    //       { value: 'pe', viewValue: 'Principal Engineer' },
    //       { value: 'asarc', viewValue: 'Associate Architect' },
    //       { value: 'arc', viewValue: 'Architect' },
    //     ]
    //   },
    //   {
    //     name: 'QA',
    //     role: [
    //       { value: 'aqae', viewValue: 'Associate QA Engineer' },
    //       { value: 'sqa', viewValue: 'QA Engineer' },
    //       { value: 'sqa', viewValue: 'Senior QA Engineer' },
    //       { value: 'stqa', viewValue: 'Staff QA Engineer' },
    //       { value: 'pqa', viewValue: 'Principal QA Engineer' },
    //       { value: 'asqaarc', viewValue: 'Associate QA Architect' },
    //       { value: 'qaarc', viewValue: 'QA Architect' },
    //     ]
    //   },
    //   {
    //     name: 'Management',
    //     role: [
    //       { value: 'mgr', viewValue: 'Manager' },
    //       { value: 'smgr', viewValue: 'Senior Manager' },
    //       { value: 'dir', viewValue: 'Director' },
    //       { value: 'vp', viewValue: 'Vice President' },
    //       { value: 'md', viewValue: 'Managing Director' }
    //     ]
    //   },
    // ];

    // this.projects = [
    //   { name: 'Radius Moderization', fullName: 'Radius Moderization Project', code: 'RMP' },
    //   { name: 'Vision', fullName: 'PrintSmith Vision', code: 'PSV' },
    //   { name: 'Pace', fullName: 'PACE', code: 'PACE' },
    //   { name: 'Rogo', fullName: 'PrintFlow', code: 'PF' },
    // ];

    // this.managers = [
    //   { 'name': 'Raghavendra Sindol', 'id': 21029 },
    //   { 'name': 'Narayyan Bathi', 'id': 34243 },
    //   { 'name': 'Indranil Banerjee', 'id': 98443 },
    //   { 'name': 'Kiran Shankar', 'id': 9876 },
    // ];

    // this.architects = [
    //   { 'name': 'Raghavendra Sindol', 'id': 21029 },
    //   { 'name': 'Praneesh Chouzan', 'id': 12345 },
    //   { 'name': 'Raghavendra Reddy N', 'id': 23456 },
    //   { 'name': 'Madhu Bhat P', 'id': 78644 },
    // ];

    // this.skills = [
    //   { name: 'HTML', id: 'html' },
    //   { name: 'CSS', id: 'css' },
    //   { name: 'Javascript', id: 'js' },
    //   { name: 'Java', id: 'java' },
    //   { name: '.Net', id: 'dotnet' },
    //   { name: 'C#', id: 'csharp' },
    //   { name: 'C++', id: 'cplusplus' },
    //   { name: 'Angular JS', id: 'angular' },
    //   { name: 'React JS', id: 'react' },
    //   { name: 'Progress', id: 'progress' },
    //   { name: 'SQL', id: 'sql' },
    //   { name: 'Postgres', id: 'postgres' },
    //   { name: 'Algorithms', id: 'algo' },
    //   { name: 'ML', id: 'ml' },
    //   { name: 'AI', id: 'ai' },
    // ];

    this.empService.getPositions().subscribe((res: any) => {
      this.positions = res;
    });

    this.empService.getProjects().subscribe((res: any) => {
      this.projects = res;
    });

    this.empService.getSkills().subscribe((res: any) => {
      this.skills = res;
    });

    this.empService.getEmployees().subscribe((res: any) => {
      this.employees = res;
      this.managers = res.filter(r => {
        return r.role === 'mgr';
      });
      this.architects = res.filter(r => {
        return r.role === 'arc';
      });
    });
  }

  getSkillsName(skill): string {
    if (skill.length == 0) {
      return '';
    } else if (this.skills && this.skills.length) {
      return this.skills.filter(el => el.id === skill[0])[0]['name'];
    }
  }

  getPojectsName(proj): string {
    if (proj.length == 0) {
      return '';
    } else if (this.projects&& this.projects.length) {
      return this.projects.filter(el => el.code == proj[0])[0]['name'];
    }
  }

  resetForm(): void {
    this.empDetails = new Employee();
    this.projectDetails = new Project();
  }

  addEmployee() {
    this.empService.addEmployee(this.empDetails).subscribe(res => {
      console.log(res);
    });
  }

}

export class Employee {
  empName: string = '';
  empCode: number = 0;
  empPosition: string = '';
  empProject: string = '';
  empsMgrProject: string[] = ['RMP', 'PSV'];
  empManager: string = "";
  empSkills: string[] = [];
  empEmail: string = '';
  empphone: number = 0;
  empLinkedIn: string = '';
  empDoj: Date = new Date();
}

export class Project {
  name: string = '';
  fullName: string = '';
  code: string = '';
  description: string = '';
  notes: string = '';
  jira: string = '';
  confluence: string = '';
  manager: string = "";
  architect: string = "";
}

interface EmpRole {
  value: string;
  viewValue: string;
}

interface EmpRoleGroup {
  disabled?: boolean;
  name: string;
  role: EmpRole[];
}

interface Projects {
  name: string;
  code: string;
  fullName: string,
}

interface Emp {
  name: string;
  id: number;
  role: string;
  project: string;
}

interface Skills {
  name: string;
  id: string;
}