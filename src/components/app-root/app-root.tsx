import { Component, Listen, State } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true
})
export class AppRoot {
  @State() showMenu: boolean = false;

  @Listen("toggleMenuEvent")
  todoCompletedHandler(event: CustomEvent) {
    if (event.detail === "toggle") {
      this.showMenu = !this.showMenu;
    } else if (event.detail === "close") {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }

  render() {
    return (
      <div>
        <header>
          <cmp-header />
        </header>

        <side-menu class={this.showMenu ? "" : "slide-right"}>
          <cmp-mobile-menu id="mobile-menu" />
        </side-menu>

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
