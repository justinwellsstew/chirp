import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { recieveTweets } from '../actions/tweets';
import { setAuthUser } from '../actions/AuthedUser';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(recieveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}