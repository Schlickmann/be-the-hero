import React, {createContext, useReducer} from 'react';

const initialState = {
  total: 0,
};

const Types = {
  ON_TOTAL_CHANGE: '@bethehero/ON_TOTAL_CHANGE'
};

const incidentsContext = createContext(initialState);
const { Provider } = incidentsContext;

const IncidentsProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case Types.ON_TOTAL_CHANGE:
        return { ...state,...action.payload };
      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Types, incidentsContext, IncidentsProvider }