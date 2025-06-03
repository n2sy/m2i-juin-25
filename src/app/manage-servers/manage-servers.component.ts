import { CommonModule, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-manage-servers',
  standalone: true,
  imports: [NgClass, CommonModule, ShortPipe, FormsModule, FilterPipe],
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  selectedStatus: string = '';
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

  addServer() {
    this.listServers.push({
      name: 'NEW SERVER',
      type: 'small',
      date_d: new Date(),
      status: 'stable',
    });
  }

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
