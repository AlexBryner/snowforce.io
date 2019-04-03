import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <cmp-image src="snowforce-19-2x.png" smallSrc="snowforce-19-2x.png" mediumSrc="snowforce-19-3x.png" largeSrc="snowforce-19-3x.png" alt="Snowforce 2019" />
        <app-about />
        <app-speakers />
        <app-sponsors />
        <cmp-image-grid />
      </div>
    );
  }
}
