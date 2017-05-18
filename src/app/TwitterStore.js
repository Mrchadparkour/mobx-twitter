import {observable, computed, action} from 'mobx';
import {get, post} from 'axios';
import React from 'react';
import {getValue} from './search';

export class TwitterStore {
  @observable tweet;
  constructor() {
    this.tweet = [];
    this.stream();
  }

  @action stream() {

    setInterval(() => {
      get('stream').then((res) => {
        if (this.tweet[this.tweet.length - 1] !== res.data || this.tweet[0]) {
          this.tweet.push(res.data);
      }
      });
    },
      5000
    );
  }
    @computed get getTweets() {
      return this.tweet;
    }

}
