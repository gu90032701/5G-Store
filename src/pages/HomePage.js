import React, { Component } from "react";
import { ProductConsumer } from "../context";
class HomePage extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            return <h1>hello from home page</h1>;
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default HomePage;
