import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [NgClass],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  listServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(4, 5, 2021),
      status: 'critical',
    },
    {
      name: 'Testing Development Server',
      type: 'large',
      date_d: new Date(6, 8, 2022),
      status: 'stable',
    },
    {
      name: 'Development Server',
      type: 'small',
      date_d: new Date(4, 5, 2021),
      status: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'small',
      date_d: new Date(),
      status: 'stable',
    },
  ];

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
