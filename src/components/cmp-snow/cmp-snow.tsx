import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-snow',
  styleUrl: 'cmp-snow.scss',
  shadow: true
})
export class CmpSnow {

  render() {
    return (
      <div class="cmp-snow">
        <div class="snow">
          <div class="before"></div>
          <div class="after"></div>
          <div class="before left"></div>
          <div class="after left"></div>
          <div class="before right"></div>
          <div class="after right"></div>
        </div>
      </div>
    );
  }
}
