import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PostService } from '../../services/post.service'

@Component({
  selector: 'tedx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  currentPage = "newBLogPost";
  title = 'Admin';
  postContent;
  constructor(private postService: PostService) {
    this.currentPage = "newBlogPost"
    this.postContent = "";
  }
  changedContent(post) {
    this.postContent = post["html"];
  }
  newBlogPost (event) {
    this.currentPage = "newBlogPost"
  }
  listOfPosts (event) {
    this.currentPage = "listOfPosts"
  }
  savePost(event) {
    this.postService.newPost("this is a new post");
  }
}
