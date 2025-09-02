import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { AvatarModule } from 'primeng/avatar';
import { MeterGroup } from 'primeng/metergroup';
import { Timeline } from 'primeng/timeline';
import { ImageCompareModule } from 'primeng/imagecompare';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  about?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    ButtonModule,
    RouterOutlet,
    FieldsetModule,
    FormsModule,
    TextareaModule,
    CardModule,
    AnimateOnScroll,
    AvatarModule,
    MeterGroup,
    Timeline,
    ImageCompareModule,
  ],
  styles: [
    `
      :host {
        @keyframes slidedown-icon {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(20px);
          }

          100% {
            transform: translateY(0);
          }
        }

        .slidedown-icon {
          animation: slidedown-icon;
          animation-duration: 3s;
          animation-iteration-count: infinite;
        }

        .box {
          background-image: radial-gradient(var(--primary-300), var(--primary-600));
          border-radius: 50% !important;
          color: var(--primary-color-text);
        }
      }
    `,
  ],
})
export class HeaderComponent {
  appName = 'Sw';
  value = [{ label: 'HTML & CSS', value: 90, color: 'var(--p-primary-color)' }];
  value1 = [{ label: 'Javascript', value: 80, color: 'var(--p-primary-color)' }];
  value2 = [{ label: 'PHP Laravel', value: 70, color: 'var(--p-primary-color)' }];
  value3 = [{ label: 'Reactjs', value: 75, color: 'var(--p-primary-color)' }];
  value4 = [{ label: 'Angular', value: 65, color: 'var(--p-primary-color)' }];
  value5 = [{ label: 'Vuejs', value: 55, color: 'var(--p-primary-color)' }];
  value6 = [{ label: 'Automation Katalon', value: 70, color: 'var(--p-primary-color)' }];
  value7 = [{ label: 'HTML', value: 80, color: 'var(--p-primary-color)' }];
  value8 = [{ label: 'HTML', value: 80, color: 'var(--p-primary-color)' }];
  value9 = [{ label: 'HTML', value: 80, color: 'var(--p-primary-color)' }];

  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'McDonald`s',
        date: '2023-2024',
        about:
          'Serving orders, creating offline and online orders, preparing food and beverages, maintaining cleanliness, and ensuring store standards',

        color: '#9C27B0',
      },
      {
        status: 'PT Telkom Indonesia',
        date: '1 October 2024 - 30 March 2025',
        about:
          'I perform manual testing on both website and mobile platforms, covering both functional and non-functional aspects of the applications. I create detailed test case scenarios and actively participate in sprint planning, sprint reviews, deployments, and sanity testing. My responsibilities also include testing in both staging and production environments. Additionally, I document all tasks and test results in Jira, and I conduct API testing using tools such as Postman and Swagger.pi pi-check',
        color: '#607D8B',
      },
      {
        status: 'Freelancer',
        date: '2025',
        about:
          'Creating dynamic websites, such as a website for PPOP coaches, a website for school exams, and static websites for digital invitations.',
        color: '#673AB7',
      },
    ];
  }
}
