import React from "react";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);       // Props has an array of objects {title: ..., content: ...}

    this.state = {
      currTagIdx: 0
    }

    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(idx) {
    this.setState({currTagIdx: idx})
  }

  getTabContent() {
    let content = this.props.tabs[this.state.currTagIdx].content;
    return content;
  }

  render() {
    return (
      <div className="widget">
        <ul id="tab-titles">
            { this.props.tabs.map((tab, idx) => {
              return (
                <li className="tab-title" key={idx} onClick={() => this.switchTab(idx)}>
                  {tab.title}
                </li>
              );
            })}
        </ul>
        <article id="tab-content">
          { this.getTabContent() }
        </article>
      </div>
    )
  }
}