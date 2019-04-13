import { Component, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "cmp-menu-links",
  styleUrl: "cmp-menu-links.scss",
  shadow: false
})
export class CmpMenuLinks {
  @Event() toggleMenuEvent: EventEmitter;

  linkClicked(type: string) {
    this.toggleMenuEvent.emit(type);
  }

  render() {
    return (
      <div class="cmp-menu-links">
        <stencil-route-link url="/about">
          <a
            class="header-link"
            href="/about"
            onClick={this.linkClicked.bind(this, "close")}
          >
            About
          </a>
        </stencil-route-link>

        <stencil-route-link url="/sponsors">
          <a
            class="header-link"
            href="/sponsors"
            onClick={this.linkClicked.bind(this, "close")}
          >
            Sponsors
          </a>
        </stencil-route-link>

        <stencil-route-link url="/speakers">
          <a
            class="header-link"
            href="/speakers"
            onClick={this.linkClicked.bind(this, "close")}
          >
            Speakers
          </a>
        </stencil-route-link>
      </div>
    );
  }
}
