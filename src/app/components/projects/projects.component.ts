import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  keyAchievements: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Banking ETL Project',
      description: 'Built enterprise-grade SSIS packages for financial data processing and real-time optimization',
      technologies: ['SSIS', 'SQL Server', 'T-SQL', 'Data Validation'],
      keyAchievements: [
        'Designed 50+ SSIS packages for daily financial reconciliation',
        'Achieved 40% improvement in data processing time through query optimization',
        'Implemented comprehensive error handling and data quality checks',
        'Reduced manual data corrections by 85%'
      ]
    },
    {
      title: 'Azure Migration Project',
      description: 'Led successful migration of legacy SSIS packages to Azure Data Factory cloud infrastructure',
      technologies: ['Azure Data Factory', 'Azure SSIS IR', 'Cloud Migration', 'Data Integration'],
      keyAchievements: [
        'Migrated 70+ SSIS packages to Azure with zero data loss',
        'Designed cloud-native ETL architecture reducing infrastructure costs by 30%',
        'Implemented automated deployment pipelines using Azure DevOps',
        'Trained team on Azure Data Factory best practices and monitoring'
      ]
    },
    {
      title: 'Hospital Management System',
      description: 'Developed comprehensive billing and patient management modules using ASP.NET framework',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'Web API', 'Entity Framework'],
      keyAchievements: [
        'Built patient billing system handling 10,000+ daily transactions',
        'Implemented RESTful APIs for mobile app integration',
        'Designed normalized database schema supporting complex queries',
        'Achieved 99.5% system uptime with performance monitoring'
      ]
    }
  ];
}
