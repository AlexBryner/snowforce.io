import { Component } from "@stencil/core";

@Component({
  tag: "cmp-snow",
  styleUrl: "cmp-snow.scss",
  shadow: true
})
export class CmpSnow {
  render() {
    return (
      <div class="cmp-snow">
        <div class="snow">
          <div class="before" />
          <div class="after" />
          <div class="before left" />
          <div class="after left" />
          <div class="before right" />
          <div class="after right" />
        </div>
      </div>
    );
  }
}
