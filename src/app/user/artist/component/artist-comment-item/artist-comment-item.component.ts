import {Component, Input, OnInit} from '@angular/core';
import {CommentObject} from '../../../shared/comment/entity/comment-object';
import {ArtistCommentService} from '../../service/artist-comment.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../shared/user/service/user.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-artist-comment-item',
  templateUrl: './artist-comment-item.component.html',
  styleUrls: ['./artist-comment-item.component.scss']
})
export class ArtistCommentItemComponent implements OnInit {
  @Input() comment: CommentObject;
  @Input() editable: boolean;
  @Input() eventSubject: Subject<any>;

  editMode = false;
  activeArtistId: number;
  activeClientId: number;
  updateCommentForm = new FormGroup({
    newComment: new FormControl('')
  });

  constructor(private commentService: ArtistCommentService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    if (this.editable === null || this.editable === undefined) {
      this.editable = false;
    }

    this.activatedRoute.url.subscribe(
      urlSegments => {
        this.activeArtistId = +urlSegments[1];
      }
    );

    this.userService.getUserInfo().subscribe(
      user => {
        this.activeClientId = user.id;
      }
    );
    // TODO: INIT the Form
  }

  submitEditedComment() {
    this.commentService.updateArtistComment(
      this.comment.id,
      this.activeArtistId,
      this.updateCommentForm.get('newComment').value,
      this.activeClientId).subscribe(
      () => {
        this.eventSubject.next();
      }, error1 => {
        this.eventSubject.error(error1);
      }
    );
  }

  startEditMode() {
    this.editMode = true;
  }

  deleteComment() {
    this.commentService.deleteArtistComment(this.comment.id).subscribe(
      () => {
        this.eventSubject.next();
      }, error1 => {
        this.eventSubject.error(error1);
      }
    );
  }
}
