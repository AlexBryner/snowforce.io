import { Component } from "@stencil/core";

@Component({
  tag: "app-sponsors",
  styleUrl: "app-sponsors.scss",
  shadow: true
})
export class AppSponsors {
  render() {
    return (
      <div class="app-sponsors">
        <cmp-sponsor
          level="platinum"
          url="https://www.simplus.com/"
          logo="Simplus.png"
          alt="Simplus"
        />

        <cmp-sponsor
          level="gold"
          url="https://www.bluewolf.com/"
          logo="Bluewolf.svg"
          alt="Bluewolf"
        />
        <cmp-sponsor
          level="gold"
          url="https://copado.com/"
          logo="Copado.svg"
          alt="Copado"
        />
        <cmp-sponsor
          level="gold"
          url="https://www.grow.com/"
          logo="Grow.png"
          alt="Grow"
        />
        <cmp-sponsor
          level="gold"
          url="https://www.lucidchart.com/"
          logo="Lucidchart.svg"
          alt="Lucidchart"
        />
        <cmp-sponsor
          level="gold"
          url="https://www.pluralsight.com/"
          logo="pluralsight.png"
          alt="Pluralsight"
        />
        <cmp-sponsor
          level="gold"
          url="https://www.workato.com/"
          logo="Workato.png"
          alt="Workato"
        />

        <cmp-sponsor
          level="silver"
          url="https://www.capstorm.com/"
          logo="Capstorm.jpg"
          alt="Capstorm"
        />
        <cmp-sponsor
          level="silver"
          url="https://technologyconsulting.eidebailly.com/solutions/salesforce/"
          logo="eide-bailly.svg"
          alt="Eide Bailly"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.financialforce.com/"
          logo="financialforce.png"
          alt="Financial Force"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.getfeedback.com/"
          logo="getfeedback.png"
          alt="GetFeedback"
        />
        <cmp-sponsor
          level="silver"
          url="https://invisible.io/"
          logo="Invisible.io.png"
          alt="Invisible.io"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.prodly.co/"
          logo="prodly.svg"
          alt="Prodly"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.salesforce.com/campaign/lightning/"
          logo="salesforce-lightning.png"
          alt="Salesforce Lightning"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.salesforce.org/"
          logo="Salesforce.org.png"
          alt="Salesforce.org"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.getweave.com/"
          logo="Weave.svg"
          alt="Weave"
        />
        <cmp-sponsor
          level="silver"
          url="https://www.zuora.com/"
          logo="Zuora.png"
          alt="Zuora"
        />
      </div>
    );
  }
}
