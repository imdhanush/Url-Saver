import {createAction, props} from '@ngrx/store';
import {Holder} from './medium.reducer';

export const addEvent = createAction('[Add Event] add', props<{ id: number, description: string, link: string }>());
export const deleteEvent = createAction('[Delete Event] delete');
export const incrementId = createAction('[Increment Id] increment');
export const setEvent = createAction('[Set Event] set', props<{ data: Holder[] }>());
