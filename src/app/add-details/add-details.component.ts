import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

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

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this._adapter.setLocale('en-GB');
    this.positions = [
      {
        name: 'Development',
        role: [
          { value: 'ase', viewValue: 'Associate Software Engineer' },
          { value: 'se', viewValue: 'Software Engineer' },
          { value: 'sse', viewValue: 'Senior Software Engineer' },
          { value: 'ste', viewValue: 'Staff Engineer' },
          { value: 'pe', viewValue: 'Principal Engineer' },
          { value: 'asarc', viewValue: 'Associate Architect' },
          { value: 'arc', viewValue: 'Architect' },
        ]
      },
      {
        name: 'QA',
        role: [
          { value: 'aqae', viewValue: 'Associate QA Engineer' },
          { value: 'sqa', viewValue: 'QA Engineer' },
          { value: 'sqa', viewValue: 'Senior QA Engineer' },
          { value: 'stqa', viewValue: 'Staff QA Engineer' },
          { value: 'pqa', viewValue: 'Principal QA Engineer' },
          { value: 'asqaarc', viewValue: 'Associate QA Architect' },
          { value: 'qaarc', viewValue: 'QA Architect' },
        ]
      },
      {
        name: 'Management',
        role: [
          { value: 'mgr', viewValue: 'Manager' },
          { value: 'smgr', viewValue: 'Senior Manager' },
          { value: 'dir', viewValue: 'Director' },
          { value: 'vp', viewValue: 'Vice President' },
          { value: 'md', viewValue: 'Managing Director' }
        ]
      },
    ];

    this.projects = [
      { name: 'Radius Moderization', fullName: 'Radius Moderization Project', code: 'RMP' },
      { name: 'Vision', fullName: 'PrintSmith Vision', code: 'PSV' },
      { name: 'Pace', fullName: 'PACE', code: 'PACE' },
      { name: 'Rogo', fullName: 'PrintFlow', code: 'PF' },
    ];

    this.managers = [
      { 'name': 'Raghavendra Sindol', 'id': 21029 },
      { 'name': 'Narayyan Bathi', 'id': 34243 },
      { 'name': 'Indranil Banerjee', 'id': 98443 },
      { 'name': 'Kiran Shankar', 'id': 9876 },
    ];

    this.architects = [
      { 'name': 'Raghavendra Sindol', 'id': 21029 },
      { 'name': 'Praneesh Chouzan', 'id': 12345 },
      { 'name': 'Raghavendra Reddy N', 'id': 23456 },
      { 'name': 'Madhu Bhat P', 'id': 78644 },
    ];

    this.skills = [
      { name: 'HTML', id: 'html' },
      { name: 'CSS', id: 'css' },
      { name: 'Javascript', id: 'js' },
      { name: 'Java', id: 'java' },
      { name: '.Net', id: 'dotnet' },
      { name: 'C#', id: 'csharp' },
      { name: 'C++', id: 'cplusplus' },
      { name: 'Angular JS', id: 'angular' },
      { name: 'React JS', id: 'react' },
      { name: 'Progress', id: 'progress' },
      { name: 'SQL', id: 'sql' },
      { name: 'Postgres', id: 'postgres' },
      { name: 'Algorithms', id: 'algo' },
      { name: 'ML', id: 'ml' },
      { name: 'AI', id: 'ai' },
    ]
  }

  getSkillsName(skill): string {
    if (skill.length == 0) {
      return '';
    } else {
      return this.skills.filter(el => el.id === skill[0])[0]['name'];
    }
  }

  resetForm(): void {
    this.empDetails = new Employee();
    this.projectDetails = new Project();
  }

}

export class Employee {
  empName: string = 'Employee Name';
  empCode: number = 0;
  empPosition: string = 'se';
  empProject: string = 'RMP';
  empManager: number = 9876;
  empSkills: string[] = ['css', 'js', 'angular', 'react'];
  empEmail: string = 'abc@efi.com';
  empphone: number = 1234567890;
  empLinkedIn: string = 'www.linkedin.com';
  empDoj: Date = new Date();
}

export class Project {
  name: string = 'Vision';
  fullName: string = 'PrintSmith Vision';
  code: string = 'PSV';
  description: string = 'Mid Market Print Suite';
  notes: string = '';
  jira: string = 'www.efi.jira.com';
  confluence: string = 'www.efi.confluence.com';
  manager: number = 21029;
  architect: number = 21029;
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
}

interface Skills {
  name: string;
  id: string;
}