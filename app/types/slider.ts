declare module "react-slick" {
  import { Component } from "react";

  interface SlickSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<SlickSettings>;
    }>;
  }

  export class Slider extends Component<SlickSettings> {}
  export class Slide extends Component {}

  export default Slider;
}
