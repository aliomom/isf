import {Component, Input, OnInit} from '@angular/core';
import {StatueDetailInterface} from '../../../entity/statue-detail/statue-detail-interface';
import {IshtarInteractionService} from '../../../service/ishtar-interaction/ishtar-interaction.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-statues-detail',
  templateUrl: './statues-detail.component.html',
  styleUrls: ['./statues-detail.component.scss']
})
export class StatuesDetailComponent implements OnInit {
  @Input() statueDetail: StatueDetailInterface;
  @Input() statuesList: StatueDetailInterface;
  @Input() statueView: any;
  isFavoriteAdded = false;

  constructor(private interactionService: IshtarInteractionService,
              private toaster: ToastrService) { }

  ngOnInit() {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById('defaultOpen').click();
  }

  addToFavorite() {
    this.isFavoriteAdded = true;
  }

  removeFromFavorite() {
    this.isFavoriteAdded = false;
  }

  // Method For Tab Section
  openTab(evt, cityName) {
    let i;
    let tabContent;
    let tabLinks;
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
    tabLinks = document.getElementsByClassName('tab-links');
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }


  addToWishList() {
    this.interactionService.addToWishList(`${this.statueDetail.id}`, 'statue');
    this.toaster.success('Statue Added To Your Wish List');
  }


  setMainPainting(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const paintingSrc = target.attributes.src;
    const value = paintingSrc.nodeValue;
    const mainImage = document.getElementById('main-img');
    mainImage.setAttribute('src', value);
    document.getElementById('full-size-img').setAttribute('src', value);
  }

  showImageInFullSize() {
    document.getElementById('full-size-img').classList.add('active');
  }

  hideFullScreenMode() {
    document.getElementById('full-size-img').classList.remove('active');
  }


}
