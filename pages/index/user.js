
export class User extends React.Component{
  render(){
    return (
      <fieldset>
        <legend>
          {this.props.first_name} {this.props.last_name}
        </legend>
        <div>
          <h3>
            {this.props.email}
          </h3>
          <p>
            {this.props.ip_address}
          </p>
          <small>
            {this.props.gender}
          </small>
        </div>
      </fieldset>
    )
  }
}
