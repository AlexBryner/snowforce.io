import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cmp-address',
  styleUrl: 'cmp-address.scss',
  shadow: true
})
export class AppAddress {

  @Prop() name: string;
  @Prop() street: string;
  @Prop() city: string;
  @Prop() state: string;
  @Prop() zip: string;

  normalize(formatStr: string): string {
    if (formatStr) {
      let splitStr = formatStr.toLowerCase().split(' ');
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].substr(0, 1).toUpperCase() + splitStr[i].substr(1).toLowerCase();
      }
      return splitStr.join(' ');
    }
    return '';
  }

  render() {
    return (
      <div class="cmp-address">
        <h3>{this.normalize(this.name)}</h3>
        <div>{this.normalize(this.street)}</div>
        <div>{this.normalize(this.city)}, {this.state.toUpperCase} {this.zip}</div>
      </div>
    );
  }
}
