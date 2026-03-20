import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactMethod {
    label: string;
    value: string;
    icon: string;
    link?: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactMethods: ContactMethod[] = [
        {
            label: 'Email',
            value: 'akanshachau8819@gmail.com',
            icon: '✉',
            link: 'mailto:akanshachau8819@gmail.com'
        },
        {
            label: 'LinkedIn',
            value: 'akansha-chaurasia',
            icon: '🔗',
            link: 'https://www.linkedin.com/in/akansha-chaurasia-b823741bb'
        },
        {
            label: 'GitHub',
            value: 'github.com/akanchachaurasia',
            icon: '🐙',
            link: 'https://github.com/akanchachaurasia'
        },
        {
            label: 'Phone',
            value: '+917566471719',
            icon: '📱',
            link: 'tel:+917566471719'
        }
    ];

    sendEmail() {
        window.location.href = 'mailto:akanshachau8819@gmail.com?subject=Hello Akansha&body=I would like to connect with you...';
    }
}
