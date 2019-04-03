import { Component, Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'cmp-menu',
  styleUrl: 'cmp-menu.scss',
  shadow: false
})
export class CmpMenu {

  @Event() toggleMenuEvent: EventEmitter;

  menuClicked(type: string) {
    this.toggleMenuEvent.emit(type);
  }

  render() {
    return (
      <div class="cmp-menu">
        <div class="header-links">
          <cmp-menu-links />
        </div>
        <div class="menu-icon" tabindex="0" onClick={this.menuClicked.bind(this, 'toggle')}>
            <img src="assets/icon/hamburger-menu.svg" alt="menu" />
        </div>
      </div>
    );
  }
}
