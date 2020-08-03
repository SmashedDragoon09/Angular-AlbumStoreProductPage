import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private _albumURL = "../assets/album.json";
  private response: Response;
  constructor(private _http: Http) { }

  getAlbum(id: Number) {
    this._http.get(this._albumURL)
    .map(
      this.response.json()
    )

  }
}
