/**
 * 引入createStore创建Store 数据源对象
 */

import { createStore } from 'redux'
import reducer from './../reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export default () =>createStore(reducer,  composeWithDevTools())

//  export default () => createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
