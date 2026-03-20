import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    description: `I am a .NET and ETL Developer with 3+ years of experience in ASP.NET, SQL Server, SSIS, and Azure Data Factory. 
                  I have worked on enterprise applications and ETL pipelines, specializing in data integration, 
                  transformation, and cloud-based analytics solutions. My expertise includes designing robust data pipelines, 
                  optimizing database performance, and migrating legacy systems to modern cloud architectures.`,
    highlights: [
      'Enterprise-grade ETL pipeline development',
      'Cloud migration and Azure Data Factory expertise',
      'Database optimization and performance tuning',
      'Team collaboration and solution architecture'
    ]
  };
}
