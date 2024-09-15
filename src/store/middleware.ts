import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk, logger];

export default middleware;
