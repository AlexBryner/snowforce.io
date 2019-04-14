import { Component, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "cmp-header",
  styleUrl: "cmp-header.scss",
  shadow: true
})
export class CmpMenu {
  @Event() toggleMenuEvent: EventEmitter;

  linkClicked(type: string) {
    this.toggleMenuEvent.emit(type);
  }

  render() {
    return (
      <div class="cmp-header">
        <div class="container">
          <stencil-route-link url="/">
            <a
              class="header-link"
              href="/"
              onMouseDown={this.linkClicked.bind(this, "close")}
            >
              <img
                class="header-img"
                src="assets/images/snowforce-2x.png"
                alt="Snowforce"
              />
            </a>
          </stencil-route-link>
          <div class="menu">
            <cmp-menu />
          </div>
        </div>
      </div>
    );
  }
}
