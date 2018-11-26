import React, { Component } from "react";
class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }
  
  setTab(index) {
    this.setState({
      selected: index,
    });
  }
  
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }
  
  _renderLabels() {
    return this.props.children.map((child, index) => (
      <div key={child.props.label} onClick={() => { this.setTab(index) }}>
        {child.props.label}
      </div>
    ));
  }
  
  render() {
    return (
      <div className="tabs">
       	{this._renderLabels()} 
        {this._renderContent()}
      </div>
    );
  }
}

export default Tabs;
