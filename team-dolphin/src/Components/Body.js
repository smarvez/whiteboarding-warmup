import React from 'react';
import TeamMember from './TeamMember';

export default class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.TeamMembers.map((member, i) => {
          console.log(this.props);
          return(
            <TeamMember key={i}
              updateState={this.props.updateState}
              member={member} expanded={this.props.expanded}/>
          )
        })}
      </div>
    )
  }
}
