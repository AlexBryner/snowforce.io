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
        <a href="https://app.pluralsight.com/search/?q=Snowforce">
          <h1>Session Recordings Available At</h1>
          <div>
            <img
              class="pluralsight"
              src="assets/icon/sponsors/pluralsight.png"
              alt="Pluralsight"
            />
          </div>
        </a>
      </div>
    );
  }
}
