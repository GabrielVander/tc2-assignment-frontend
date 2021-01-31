import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINT} from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }

  public saveAnimals(animals: Animal[]): Promise<Animal[]> {
    return Promise.all(animals.map(value => this.http.post<Animal>(`${API_ENDPOINT}/animal`, value).toPromise()));
  }
}
