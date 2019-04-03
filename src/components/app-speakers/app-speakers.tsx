import { Component } from '@stencil/core';

@Component({
  tag: 'app-speakers',
  styleUrl: 'app-speakers.scss',
  shadow: true
})
export class AppSpeakers {

  render() {
    return (
      <div class='app-speakers'>
        <div class="container">
          <h1>Speakers</h1>
          <p>Coming Back Soon...</p>
        </div>
      </div>
    );
  }
}
