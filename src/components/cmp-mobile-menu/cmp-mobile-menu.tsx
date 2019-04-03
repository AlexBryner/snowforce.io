import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-mobile-menu',
  styleUrl: 'cmp-mobile-menu.scss',
  shadow: true
})
export class CmpMobileMenu {

  render() {
    return (
      <div class="cmp-mobile-menu">
        <cmp-menu-links />
      </div>
    );
  }
}
