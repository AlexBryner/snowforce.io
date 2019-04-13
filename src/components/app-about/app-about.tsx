import { Component } from "@stencil/core";

@Component({
  tag: "app-about",
  styleUrl: "app-about.scss",
  shadow: true
})
export class AppAbout {
  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    return (
      <div class="app-about container">
        <div>
          <span />
          <div class="p-small description">
            <h1>About</h1>
            Snowforce is a 2-day event organized by the local User Group Leaders
            in the Rocky Mountain region, which brings together Salesforce users
            from all walks of life. While it started 8 years ago as an event
            primarily for Admins and Developers, it has now grown significantly
            and boasts an Executive Track, an Advanced Admin track, a Marketing
            Cloud track, and a collection of Hands On sessions. With 600
            attendees, it is also a great place to network with other local
            users, discuss trends and current issues, find support resources
            (like User Groups and Partners), and just geek-out about Salesforce
            with other like-minded individuals.{" "}
            <a href="https://www.linkedin.com/pulse/what-snowforce-carolyn-adams/">
              What is Snowforce?
            </a>
          </div>

          <div class="flex">
            <div class="event-details">
              <div>
                <h1>Events</h1>
              </div>
              <div>
                <h2>Day 1 - Networking Dinner</h2>
                <cmp-address
                  name="Rodizio Grill"
                  street="600 South 700 East 2nd Floor"
                  city="Salt Lake City"
                  state="UT"
                  zip="84102"
                />
              </div>
              <div>
                <h2>Day 2 - Conference</h2>
                <cmp-address
                  name="Utah Cultural Celebration Center"
                  street="1355 West 3100 South"
                  city="West Valley City"
                  state="UT"
                  zip="84119"
                />
              </div>
              <div>
                <h2>Day 3 - Ski Day</h2>
                <cmp-address
                  name="Solitude"
                  street="12000 Big Cottonwood Canyon Rd"
                  city="Solitude"
                  state="UT"
                  zip="84121"
                />
              </div>
            </div>
            <div class="snowforce-pics">
              <cmp-image
                src="snowforce-pics.png"
                smallSrc="snowforce-pics.png"
                mediumSrc="snowforce-pics-2x.png"
                largeSrc="snowforce-pics-3x.png"
                alt="Collage of the dinner, culteral center, and skiing"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
