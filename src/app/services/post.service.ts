import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    newPost (text) {
        console.log("this is the new service")
        console.log(text)
    }
    constructor() { }

}