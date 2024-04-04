import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {FIREBASE_API_URL, Profile, ProfileApiResponse} from '@shared';
import {Observable, map} from 'rxjs';

@Injectable()
export class ProfileApiService {
	private readonly httpClient = inject(HttpClient);

	public getProfile(uid: string): Observable<Profile | null> {
		return this.httpClient.get<ProfileApiResponse>(`${FIREBASE_API_URL}/users/${uid}.json`).pipe(
			map((user) => {
				if (user) {
					return {...user, birthday: new Date(user?.birthday ?? '').toUTCString()};
				}
				return user;
			})
		);
	}

	public changeCity(uid: string, payload: ProfileApiResponse): Observable<any> {
		return this.httpClient.patch(`${FIREBASE_API_URL}/users/${uid}.json`, payload);
	}
}
