import React, {createContext, useReducer} from 'react';

const initialState = {
  total: 0,
  loading: false,
  page: 1,
};

const Types = {
  GET_INCIDENTS_REQUEST: '@bethehero/GET_INCIDENTS_REQUEST',
  GET_INCIDENTS_SUCCESS: '@bethehero/GET_INCIDENTS_SUCCESS',
  GET_INCIDENTS_FAILURE: '@bethehero/GET_INCIDENTS_FAILURE'
};

const incidentsContext = createContext(initialState);
const { Provider } = incidentsContext;

const IncidentsProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case Types.GET_INCIDENTS_REQUEST:
        return { ...state, loading: true };
      case Types.GET_INCIDENTS_SUCCESS:
        return { ...state, loading: false, ...action.payload };
      case Types.GET_INCIDENTS_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    };
  }, initialState);

  const value = {
    ...state,
    getRequest: () => {
      dispatch({ type: Types.GET_INCIDENTS_REQUEST });
    },
    getSuccess: (total, page = 1) => {
      dispatch({ type: Types.GET_INCIDENTS_SUCCESS, payload: { total, page } });
    },
    getFailure: () => {
      dispatch({ type: Types.GET_INCIDENTS_FAILURE });
    },
  }

  return <Provider value={value}>{children}</Provider>;
};

export { Types, incidentsContext, IncidentsProvider }