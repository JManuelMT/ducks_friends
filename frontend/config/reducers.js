import { combineReducers } from 'redux';

import { alertReducer as alert } from '../ducks/alert';
import { activitiesReducer as ducksFeedingActivities } from '../ducks/ducksFeedingActivities';
import { userReducer as user } from '../ducks/user';
import { loadingReducer as loading } from '../ducks/loading';

const rootReducer = combineReducers({
    alert,
    ducksFeedingActivities,
    user,
    loading,
});

export default rootReducer;
