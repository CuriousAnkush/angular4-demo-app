import { Component, OnInit } from '@angular/core';
import {MassangerService} from '../../services/massanger.service';

@Component({
  selector: 'app-massenger',
  templateUrl: './massenger.component.html',
  styleUrls: ['./massenger.component.css']
})
export class MassengerComponent implements OnInit {

  constructor(public messageService: MassangerService) { }

  ngOnInit() {
  }

}
