import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArtTypeListItem} from '../../../entity/art-type-list/art-type-list-item';
import {ArtTypeService} from '../../../../admin/service/art-type/art-type.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {
  @Input() artTypeList: ArtTypeListItem[];
  @Input() hidden = false;
  constructor() {
  }

  ngOnInit() {
  }

}