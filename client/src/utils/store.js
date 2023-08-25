//create a redux store, have to use legacy because we are using old redux and not redux toolKit
import { legacy_createStore as createStore } from 'redux';

//importing the reducer file
import reducers from './reducers';

//export redux store
export default createStore(reducers);