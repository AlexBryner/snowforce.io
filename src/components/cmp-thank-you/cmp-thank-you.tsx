import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-thank-you',
  styleUrl: 'cmp-thank-you.scss',
  shadow: true
})
export class CmpFireworks {

  render() {
    return (
      <div class="cmp-thank-you">
        <h1>Thank you to our Sponsors for a Great Snowforce2019!!</h1>
        <app-sponsors />
        <h2>Session Recordings Coming Soon on Pluralsight</h2>
      </div>
    );
  }
}
