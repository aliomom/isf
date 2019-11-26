import { Injectable } from '@angular/core';
import {UserConfig} from '../../UserConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Interactions} from '../entitiy/interactions';
import {InteractionsResponse} from '../response/interactions-response';

@Injectable({
  providedIn: 'root'
})
export class InteractionsRepositoryService {

  constructor(private httpClient: HttpClient) { }

  // Get Interactions number(entity: artistTableNumber, row: artistId, interactionsNumber: 1 for love & 2 for follow)
  getInteractionsNumber(entity: number, row: number, interactionsNumber: number): Observable<InteractionsResponse> {
    return this.httpClient.get<InteractionsResponse>(`${UserConfig.interactionsNumberAPI}/${entity}/${row}/${interactionsNumber}`);
  }
/*
  addViewInteraction(entityId: number, entityType: string) {
    if (!this.userRequestSent) {
      // If Not Request Him
      this.userRequestSent = true;
      this.userService.requestUserDetails().subscribe(
          (user: any) => {
            // Assign the Data to the User
            if (this.isUserNode(user.Data)) {
              console.log('Assigning User');
              this.userInfo = user.Data;
              this.postViewInteractions(entityId, entityType);
            }
          }
      );
    } else if (this.checkUserDetailsExists()) {
      console.log('User Exists, Requesting Love Status');
      this.postViewInteractions(entityId, entityType);
    }
  }

  private postViewInteractions(entityId: number, entityType: string) {
    const request: LoveRequest = {
      client: this.userInfo.id,
      row: entityId,
      entity: this.toEntityId(entityType),
      interaction: InteractionConsts.INTERACTION_TYPE_VIEW
    };
    return this.httpClient.post(`${UserConfig.interactionsAPI}`, JSON.stringify(request)).subscribe(
        (res: any) => {
          console.log('This Artist Was Reviewed', res);
        },
        error => {
          console.log(error);
        }
    );
  }


  public addToWishList(id: string, entityType: string) {
    const request: {
      type: string,
      id: string
    } = {
      type: entityType,
      id: `${id}`
    };
    return this.httpClient.post(UserConfig.interactionsAPI, JSON.stringify(request));
  }


  // region Class Specific Validators
  private checkUserDetailsExists(): boolean {
    if (this.userInfo == null) {
      return false;
    }
    console.log('Apparently user data is ' + this.userInfo.id !== null);
    return this.userInfo.id !== undefined;
  }

  private isUserNode(user: UserInfo) {
    return user.id !== undefined;
  }

  private toEntityId(itemType): number {
    let entityId = 0;
    if (itemType === 'painting') {
      entityId = 1;
    }
    if (itemType === 'artist') {
      entityId = 2;
    }
    if (itemType === 'artType') {
      entityId = 3;
    }
    if (itemType === 'statue') {
      entityId = 6;
    }
    return entityId;
  }
*/
}