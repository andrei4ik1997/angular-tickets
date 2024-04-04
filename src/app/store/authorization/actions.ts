import {createAction, props} from '@ngrx/store';
import {getActionDescription} from '@shared';
import {AUTHORIZATION_FEATURE_KEY} from './entities/constants';

const actionDescription = (description: string) =>
	getActionDescription(AUTHORIZATION_FEATURE_KEY.toUpperCase(), description);

export const authorizationActions = {
	setAuthCredits: createAction(actionDescription('Set auth credits'), props<{data: {uid: string} | null}>()),
};
