import {createAction, props} from '@ngrx/store';

export const addEvent = createAction('[Add Event] add', props<{ id: number, description: string, link: string }>());
export const deleteEvent = createAction('[Delete Event] delete');
export const incrementId = createAction('[Increment Id] Add');
