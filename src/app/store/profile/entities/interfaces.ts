import {LoadingStatus, Profile} from '@shared';

export interface ProfileState {
	changeCityLoadingStatus: LoadingStatus;
	profile: Profile | null;
	profileLoadingStatus: LoadingStatus;
}
