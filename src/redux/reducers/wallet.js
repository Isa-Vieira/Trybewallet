import { TIPO_MOEDA, CARACTERS_DESPESAS, THUNK2 } from '../actions';

const INNITIAL_STATE = { currencies: ['USD'], expenses: [] };
const recebeTipoDaMoeda = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case TIPO_MOEDA:
    return {
      ...state,
      currencies: action.payload,
    };
  case CARACTERS_DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case THUNK2:
    return {
      ...state,
      expenses: action.payload,

    };
  default:
    return { ...state };
  }
};
export default recebeTipoDaMoeda;
