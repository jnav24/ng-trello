import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BoardsModel} from '../store/models/board.model';

@Injectable()
export class TrelloService {
    private readonly key = environment.trello_key;
    private readonly token = environment.trello_token;
    private readonly url = environment.trello_url;

    constructor(
        private http: HttpClient,
    ) {}

    getBoards() {
        const params = {
            key: this.key,
            fields: 'name,url',
            token: this.token,
        };
        return this.http.get<BoardsModel[]>(`${this.url}members/me/boards`, { params });
    }
}
