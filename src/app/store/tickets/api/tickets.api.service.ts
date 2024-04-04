import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {FIREBASE_API_URL, Ticket, TicketApiResponse} from '@shared';
import {Observable, map} from 'rxjs';

@Injectable()
export class TicketsApiService {
	private readonly httpClient = inject(HttpClient);

	public getTickets(): Observable<Ticket[]> {
		return this.httpClient
			.get<TicketApiResponse[]>(`${FIREBASE_API_URL}/tickets.json`)
			.pipe(
				map((tickets) =>
					tickets?.map((ticket) => ({...ticket, createdDate: new Date(ticket.createdDate).toUTCString()}))
				)
			);
	}
}
