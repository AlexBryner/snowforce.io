import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cmp-sponsor',
  styleUrl: 'cmp-sponsor.scss',
  shadow: false
})
export class CmpSponsor {

  /** Sponsor Name */
  @Prop() name: string;
  /** Sponsor Level */
  @Prop() level!: string;
  /** Sponsor Website */
  @Prop() url: string;
  /** Sponsor Logo */
  @Prop() logo: string;
  /** Alt Tag for Logo */
  @Prop() alt: string;

  getSrc(): string {
    return 'assets/icon/sponsors/' + this.logo;
  }

  getLogo(): any {
    if (this.logo) {
       return <img src={this.getSrc()} alt={this.alt} />;
    } else {
      return;
    }
  }

  render() {
    return (
      <div class={this.level}>
          <a href={this.url}>
            {this.getLogo()}{this.name}
          </a>
      </div>
    );
  }
}
