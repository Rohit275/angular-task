import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Machine } from '../machine.model';
import { MachinesService } from '../machine.service';

import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css'],
})
export class MachineListComponent implements OnInit, OnDestroy {
  faTrash = faTrashAlt;
  faPen = faPen;
  machines: Machine[] = [];
  private machinesSub: Subscription;

  constructor(public machinesService: MachinesService) {}

  ngOnInit(): void {
    this.machinesService.getMachines();
    this.machinesSub = this.machinesService
      .getMachineUpdateListener()
      .subscribe((machines: Machine[]) => {
        this.machines = machines;
      });
  }

  onDelete(machineId: string) {
    this.machinesService.deleteMachine(machineId);
  }

  ngOnDestroy() {
    this.machinesSub.unsubscribe();
  }
}
