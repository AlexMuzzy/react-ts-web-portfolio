import React, { Component } from "react";


import LandingPage from "./LandingPage/landingPage"

type AppState = { height: number, width: number };
type AppProps = {}; // There should be no props since this is the 'main' parent component.

class App extends Component<AppProps, AppState>{

  constructor(props: AppProps){
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

   /**
   * Events to listen on each resize of browser. Will allow for size of landing page
   * component to be dynamically resized.
   * */

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  
    updateWindowDimensions() {
      let docHeight: number = window.innerHeight;
      let docWidth: number = window.innerWidth;
      console.log(docHeight);
      this.setState({ width: docWidth, height: docHeight });
    }
  
    // Allows for dynamic resizing of document in React to affect background size.

  render(){
    return (
      <LandingPage height={this.state.height}/>
    );
  }
}

export default App;
