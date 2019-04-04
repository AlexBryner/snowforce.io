import { Component } from '@stencil/core';

@Component({
  tag: 'app-sponsors',
  styleUrl: 'app-sponsors.scss',
  shadow: true
})
export class AppSponsors {

  render() {
    return (
      <div class='app-sponsors'>
        <cmp-sponsor name="Simplus" level="platinum" url="https://www.simplus.com/" logo="Simplus.png" alt="Simplus" />

        <cmp-sponsor name="Bluewolf" level="gold" url="https://www.bluewolf.com/" />
        <cmp-sponsor name="Copado" level="gold" url="https://copado.com/" />
        <cmp-sponsor name="Grow" level="gold" url="https://www.grow.com/" />
        <cmp-sponsor name="Lucidchart" level="gold" url="https://www.lucidchart.com/" />
        <cmp-sponsor name="Pluralsight" level="gold" url="https://www.pluralsight.com/" />
        <cmp-sponsor name="Workato" level="gold" url="https://www.workato.com/" />

        <cmp-sponsor name="Capstorm" level="silver" url="https://www.capstorm.com/" />
        <cmp-sponsor name="Eide Bailly" level="silver" url="https://technologyconsulting.eidebailly.com/solutions/salesforce/" />
        <cmp-sponsor name="Financial Force" level="silver" url="https://www.financialforce.com/" />
        <cmp-sponsor name="GetFeedback" level="silver" url="https://www.getfeedback.com/" />
        <cmp-sponsor name="Invisible.io" level="silver" url="https://invisible.io/" />
        <cmp-sponsor name="Prodly" level="silver" url="https://www.prodly.co/" />
        <cmp-sponsor name="Salesforce Lightning" level="silver" url="https://www.salesforce.com/campaign/lightning/" />
      </div>
    );
  }
}
