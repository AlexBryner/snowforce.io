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
          <div class="before margin-up"></div>
          <div class="after margin-up"></div>
          <div class="before margin-down"></div>
          <div class="after margin-down"></div>
        </div>
      </div>
    );
  }
}
