import React from 'react'

// const{updateState, member} = this.props

export default class TeamMember extends React.Component {
  constructor(props){
    super(props)
    this.expand=this.expand.bind(this)
  }

  expand(e){
    this.props.updateState(this.props.member.id)
  }
  render() {
    return(
      <div>
        <img onClick={this.expand} src={this.props.member.spiritAnimal} />
        {(this.props.expanded===this.props.member.id) ?
          <div>
            <h3>{this.props.member.name}</h3>
            <p>{this.props.member.motto}</p>
          </div> : null
        }
      </div>
    )
  }
}
