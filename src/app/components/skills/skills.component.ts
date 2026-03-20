import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      category: 'Backend Development',
      items: ['ASP.NET', 'C#', 'Web API', 'Entity Framework', 'LINQ']
    },
    {
      category: 'Database',
      items: ['SQL Server', 'Oracle', 'T-SQL', 'Database Design', 'Query Optimization']
    },
    {
      category: 'ETL & Data Integration',
      items: ['SSIS', 'ETL Pipelines', 'Data Transformation', 'Data Validation', 'Error Handling']
    },
    {
      category: 'Cloud & Analytics',
      items: ['Azure Data Factory', 'Azure SSIS IR', 'Data Warehousing', 'Data Lake', 'Azure SQL']
    },
    {
      category: 'Tools & Technologies',
      items: ['Visual Studio', 'SQL Server Management Studio', 'Git', 'Jira', 'Azure Portal']
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Documentation', 'Team Collaboration', 'Project Management', 'Mentoring']
    }
  ];
}
