import { Component, Listen, State } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true
})
export class AppRoot {
  @State() showMenu: boolean = false;

  toggleOverlay() {
    this.showMenu = !this.showMenu;
  }

  @Listen("toggleMenuEvent")
  todoCompletedHandler(event: CustomEvent) {
    if (event.detail === "close") {
      this.showMenu = false;
    } else {
      this.showMenu = !this.showMenu;
    }
  }

  render() {
    return (
      <div class="app-root">
        <header>
          <cmp-header />
        </header>

        <mobile-menu class={this.showMenu ? "show" : "hide"}>
          <overlay onClick={this.toggleOverlay.bind(this)} />
          <side-drawer>
            <div>
              <cmp-mobile-menu id="mobile-menu" />
            </div>
          </side-drawer>
        </mobile-menu>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about" component="app-about" />
              <stencil-route url="/about-us" component="app-about" />
              <stencil-route url="/sponsors" component="app-sponsors" />
              <stencil-route url="/speakers" component="app-speakers" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
