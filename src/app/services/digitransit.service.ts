import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {
    apiurl: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

    constructor(private http: HttpClient) {
    }

    getRoutes() {
        interface ReittiData {
            data: object;
        }

        const body = `{
                        stops(name: "linnuntie") {
                            name
                            lat
                            lon
                            patterns {
                                id
                                name
                                route {
                                    gtfsId
                                    shortName
                                    longName
                                }
                                directionId
                            }
                        }
                      }`;
        const headers = {headers: new HttpHeaders().set('Content-Type', 'application/graphql')};
        return this.http.post<ReittiData>(this.apiurl, body, headers);
    }
}
