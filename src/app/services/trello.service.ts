import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BoardsModel} from '../store/models/board.model';
import {CardModel} from '../store/models/card.model';

@Injectable()
export class TrelloService {
    private readonly url = environment.trello_url;
    private readonly params = {
        key: environment.trello_key,
        token: environment.trello_token,
    };

    constructor(
        private http: HttpClient,
    ) {}

    getBoards() {
        return this.http.get<BoardsModel[]>(`${this.url}members/me/boards`, {
            params: {
                ...this.params,
                fields: 'name,url'
            },
        });
    }

    getAllCards(boardId: string) {
        const params = {
            ...this.params,
            fields: 'name,idList,url,idLabels,desc',
        };
        return this.http.get<CardModel[]>(`${this.url}boards/${boardId}/cards`, { params });
    }
}
