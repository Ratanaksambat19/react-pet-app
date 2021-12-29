import { createStore } from 'redux';
import reducer from './reducer';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const store = createStore( 
    store,
    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_ !== "undefined"
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        ? window.__REDUX_DEVTOOLS_EXTENSION_()
        : (f) => f
)

export default store;