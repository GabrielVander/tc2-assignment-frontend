import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINT} from '../../models/Constants';
import '../../models/AnimalSingleResponse';
import '../../models/AnimalResponse';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }

  public saveAnimals(animals: Animal[]): Promise<AnimalSingleResponse[]> {
    return Promise.all(animals.map(value => this.http.post<AnimalSingleResponse>(`${API_ENDPOINT}/animal`, value).toPromise()));
  }

  public async getById(id: string): Promise<AnimalResponse> {
    return this.http
      .get<AnimalResponse>(`${API_ENDPOINT}/animal?_id=${id}`)
      .toPromise();
  }

  public deleteById(id: string): void {
    this.http
      .request(
        'delete',
        `${API_ENDPOINT}/animal`,
        {
          body: {
            _id: id,
          }
        }
      ).toPromise().then(value => console.log(value));
  }
}
