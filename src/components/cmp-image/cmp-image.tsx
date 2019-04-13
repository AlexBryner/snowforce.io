import { Component, Prop } from "@stencil/core";

@Component({
  tag: "cmp-image",
  styleUrl: "cmp-image.scss",
  shadow: false
})
export class CmpImage {
  /** Name of the image to display */
  @Prop() src!: string;
  /** Alt Text for the Image */
  @Prop() alt!: string;

  /** Responsive Small image to be displayed on phone sized screens */
  @Prop() smallSrc: string;
  /** Responsive Medium sized image to be displayed on tablet sized screens */
  @Prop() mediumSrc: string;
  /** Responsive Full resolution image */
  @Prop() largeSrc: string;

  /** Image directory. */
  @Prop() imgDirectory: string = "assets/images/";
  /** Transition to Small Screen Size. */
  @Prop() smallPxl: number = 524;
  /** Transition to Medium Screen Size. */
  @Prop() mediumPxl: number = 959;
  /** Transition to Large Screen Size. */
  @Prop() largePxl: number = 1440;

  getImg(img: string): string {
    if (img) {
      return this.imgDirectory + img;
    } else {
      return "";
    }
  }

  getAlt(): string {
    return "Snowforce - " + this.alt;
  }

  getSrcSet(): string {
    let srcSet: string = "";
    if (this.smallSrc) {
      srcSet += this.getImg(this.smallSrc) + " " + this.smallPxl + "w";
    }

    if (this.mediumSrc) {
      if (srcSet) {
        srcSet += ", ";
      }

      srcSet += this.getImg(this.mediumSrc) + " " + this.mediumPxl + "w";
    }

    if (this.largeSrc) {
      if (srcSet) {
        srcSet += ", ";
      }

      srcSet += this.getImg(this.largeSrc) + " " + this.largePxl + "w";
    }

    return srcSet;
  }

  getSizes(): string {
    let sizes: string = "";
    if (this.smallPxl) {
      sizes += `(max-width: ${this.smallPxl}px) ${this.smallPxl}px`;
    }

    if (this.mediumPxl) {
      if (sizes) {
        sizes += ", ";
      }
      sizes += `(max-width: ${this.mediumPxl}px) ${this.mediumPxl}px`;
    }

    if (this.largePxl) {
      if (sizes) {
        sizes += ", ";
      }
      sizes += `${this.largePxl}px`;
    }
    return sizes;
  }

  render() {
    return (
      <div class="cmp-image">
        <img
          srcset={this.getSrcSet()}
          sizes={this.getSizes()}
          src={this.getImg(this.src)}
          alt={this.getAlt()}
        />
      </div>
    );
  }
}
