import { Component } from "@stencil/core";

@Component({
  tag: "cmp-thank-you",
  styleUrl: "cmp-thank-you.scss",
  shadow: true
})
export class CmpFireworks {
  render() {
    return (
      <div class="cmp-thank-you">
        <h1>Thank You To Our Sponsors For A Great Snowforce 2019!</h1>
        <app-sponsors />
        <h2>Session Recordings Coming Soon On</h2>
        <div>
          <a href="https://www.pluralsight.com/">
            <img
              class="pluralsight"
              src="assets/icon/sponsors/pluralsight.png"
              alt="Pluralsight"
            />
          </a>
        </div>
      </div>
    );
  }
}
