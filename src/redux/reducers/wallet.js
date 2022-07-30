import { TIPO_MOEDA } from '../actions';

const INNITIAL_STATE = { currencies: ['USD'] };
const recebeTipoDaMoeda = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case TIPO_MOEDA:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return { ...state };
  }
};
export default recebeTipoDaMoeda;
