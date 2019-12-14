import {createReducer, on} from '@ngrx/store';
import {addEvent, incrementId, setEvent} from './medium.actions';

export interface Holder {
  id: number;
  time: Date | number;
  link: string;
  description: string;
}

export interface State {
  arr: Holder[];
}

export interface IdCountI {
  count: number;
}

// @ts-ignore
export const initialState: State = {arr: []};
export const initialId: IdCountI = {count: 0};

// tslint:disable-next-line:variable-name
const _mediumReducer = createReducer(initialState, on(addEvent, (state, {id, description, link}) => ({
    ...state,
    // @ts-ignore
    arr: [...state.arr, {id, description, link, time: Math.floor(new Date() / 1000)}]
  })),
  on(setEvent, (state, {data}) => ({arr: [...data]}))
);

// tslint:disable-next-line:variable-name
const _CounterReducer = createReducer(initialId, on(incrementId, (state2 => ({...state2, count: state2.count + 1}))));

export function mediumReducer(state, action) {
  return _mediumReducer(state, action);
}

export function counterReducer(state, action) {
  return _CounterReducer(state, action);
}
