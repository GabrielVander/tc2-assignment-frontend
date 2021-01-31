import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINT} from '../../models/Constants';
import '../../models/AnimalSingleResponse';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }

  public saveAnimals(animals: Animal[]): Promise<AnimalSingleResponse[]> {
    return Promise.all(animals.map(value => this.http.post<AnimalSingleResponse>(`${API_ENDPOINT}/animal`, value).toPromise()));
  }
}
