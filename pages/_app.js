import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../components/redux/reducers'
import withredux from 'next-redux-wrapper'
import App,{Container} from 'next/app'
import thunk from 'redux-thunk'


const makeStore = (initialState={}) => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
}

export default withredux(makeStore, { debug: true })(
    class MyApp extends App {
      static async getInitialProps({ Component, ctx }) {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : {})
          }
        };
      }
  
      render() {
        const { Component, pageProps, store } = this.props;
        return (

                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>


        );
      }
    }
  );