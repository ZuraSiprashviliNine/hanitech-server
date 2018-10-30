
import store from '../../store';
import {
  SET_USERS,
  CLEAR_USERS
} from '../../actions/users';

import withRedux from 'next-redux-wrapper';

import '../../styles/style.scss';

import {User} from './user';

class Index extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      ready: false
    };

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount(){
    if(!this.props.Users.users.length){
      this.props.initUsers();
    }
  }

  componentDidUpdate(){
    if(this.state.ready === false && this.props.Users.users.users.length){
      this.setState({
        ready: true
      })
    }
  }

  getUsers(){
    if(this.state.ready){
      return this.props.Users.users.users.map(user => (
        <User
          key={user.id}
          {...user}/>
      ))
    }
  }

  render(){
      return (
          <div>
            <fieldset>
              <legend>
                users
              </legend>
              <div>
                {this.getUsers()}
              </div>
            </fieldset>
            lorem
          </div>
      )
  }
}

const States = state => {
  return {
    Users: state.User
  };
};
const Actions = dispatch => {
  return {
    initUsers: () => {
      dispatch(SET_USERS());
    },
    clearUsers: () => {
      dispatch(CLEAR_USERS());
    }
  }
};

export default withRedux(store, States, Actions)(Index);
