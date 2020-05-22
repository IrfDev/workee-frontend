import { connect, Provider, createStore } from 'react-redux';

const initialState = {
  count: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementValue = () => ({
  type: INCREMENT,
});

const decrementValue = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  return state;
};

const mapStateToProps = (state) => {
  return state;
};

// Podemos pasarl implemente un objeo con nuestras acciones y listo

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementValue,
      decrementValue,
    },
    dispatch
  );
};

const CounterContainer = connect()('Coun');

const store = createStore(reducer);
