import { Component } from '@stencil/core';

@Component({
  tag: 'cmp-image-grid',
  styleUrl: 'cmp-image-grid.scss',
  shadow: true
})
export class AppHome {

  slideOpts = {
    effect: 'flip'
  };

  render() {
    return (
      <div class='cmp-image-grid'>
        <div class="row">
          <div class="column">
            <cmp-image src="sponsors.jpg" smallSrc="sponsors.jpg" mediumSrc="sponsors-2x.jpg" largeSrc="sponsors-2x.jpg" alt="Sponsor Board" />
            <cmp-image src="full-session.jpg" smallSrc="full-session.jpg" mediumSrc="full-session-2x.jpg" largeSrc="full-session-2x.jpg" alt="Full Session"/>
            <cmp-image src="main-hall-prepped.jpg" smallSrc="main-hall-prepped.jpg" mediumSrc="main-hall-prepped-2x.jpg" largeSrc="main-hall-prepped-2x.jpg" alt="Main Conference Room Prepped" />
            <cmp-image src="opening-keynote.jpg" smallSrc="opening-keynote.jpg" mediumSrc="opening-keynote-2x.jpg" largeSrc="opening-keynote-2x.jpg" alt="Opening Keynote 2019" />
            <cmp-image src="solitude.jpg" smallSrc="solitude.jpg" mediumSrc="solitude-2x.jpg" largeSrc="solitude-2x.jpg" alt="Solitude" />
          </div>
          <div class="column">
            <cmp-image src="wall-opening.jpg" smallSrc="wall-opening.jpg" mediumSrc="wall-opening-2x.jpg" largeSrc="wall-opening-2x.jpg" alt="Conference Entry with Simplus Sponsor 2019" />
            <cmp-image src="snack-bar.png" smallSrc="snack-bar.pgn" mediumSrc="snack-bar-2x.png" largeSrc="snack-bar-2x.png" alt="Snack Bar at the Depot" />
            <cmp-image src="swag-store.jpg" smallSrc="swag-store.jpg" mediumSrc="swag-store-2x.jpg" largeSrc="swag-store-2x.jpg" alt="Swag Store" />
            <cmp-image src="simplus.png" smallSrc="simplus.png" mediumSrc="simplus-2x.png" largeSrc="simplus-2x.png" alt="Simplus Booth" />
            <cmp-image src="grow-booth.jpg" smallSrc="grow-booth.jpg" mediumSrc="grow-booth-2x.jpg" largeSrc="grow-booth-2x.jpg" alt="Grow Expo Booth" />
            <cmp-image src="charity.jpg" smallSrc="charity.jpg" mediumSrc="charity-2x.jpg" largeSrc="charity-2x.jpg" alt="Donations Booth" />
          </div>
          <div class="column">
            <cmp-image src="keynote-full.jpg" smallSrc="keynote-full.jpg" mediumSrc="keynote-full-2x.jpg" largeSrc="keynote-full-2x.jpg" alt="Keynote Speaker" />
            <cmp-image src="food-trucks.jpg" smallSrc="food-trucks.jpg" mediumSrc="food-trucks-2x.jpg" largeSrc="food-trucks-2x.jpg" alt="Food Trucks at Lunch" />
            <cmp-image src="lucid.jpg" smallSrc="lucid.jpg" mediumSrc="lucid-2x.jpg" largeSrc="lucid-2x.jpg" alt="LucidChart Expo Booth" />
            <cmp-image src="sasquatch.jpg" smallSrc="sasquatch.jpg" mediumSrc="sasquatch-2x.jpg" largeSrc="sasquatch-2x.jpg" alt="Snowforce Sasquatch" />
            <cmp-image src="simplus-pic.jpg" smallSrc="simplus-pic.jpg" mediumSrc="simplus-pic-2x.jpg" largeSrc="simplus-pic-2x.jpg" alt="Simplus Banner" />
            <cmp-image src="matt-keynote.jpg" smallSrc="matt-keynote.jpg" mediumSrc="matt-keynote-2x.jpg" largeSrc="matt-keynote-2x.jpg" alt="Matt Keynote" />
          </div>
          <div class="column">
            <cmp-image src="snowshoe.jpg" smallSrc="snowshoe.jpg" mediumSrc="snowshoe-2x.jpg" largeSrc="snowshoe-2x.jpg" alt="Snowshoe Group on Ski Day" />
            <cmp-image src="keynote-gillian.jpg" smallSrc="keynote-gillian.jpg" mediumSrc="keynote-gillian-2x.jpg" largeSrc="keynote-gillian-2x.jpg" alt="Gillian Keynote" />
            <cmp-image src="pizza-foodtruck.png" smallSrc="pizza-foodtruck.png" mediumSrc="pizza-foodtruck-2x.png" largeSrc="pizza-foodtruck-2x.png" alt="Pizza Foodtruck" />
            <cmp-image src="getfeedback-booth.jpg" smallSrc="getfeedback-booth.jpg" mediumSrc="getfeedback-booth-2x.jpg" largeSrc="getfeedback-booth-2x.jpg" alt="GetFeedback Expo Booth" />
            <cmp-image src="sponsor-wall-angled.jpg" smallSrc="sponsor-wall-angled.jpg" mediumSrc="sponsor-wall-angled-2x.jpg" largeSrc="sponsor-wall-angled-2x.jpg" alt="Sponsor Wall at an angle" />
          </div>
        </div>
      </div>
    );
  }
}
