import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { IUser } from '../../models';

@Injectable()
export class UserService {
  private httpOptions!: {};
  readonly DEVELOPER_URL = 'api/developers';

  constructor(private _http: HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
  }

  /**
   * get All user from initial array
   * @returns Subject<IUser[]>
   */
  getUSer(): Observable<IUser[]> {
    return this._http.get<IUser[]>(`${this.DEVELOPER_URL}`, this.httpOptions)
      .pipe(
        retry(2),
        tap((data: Array<IUser>) => this.log(`fetch data dev with size ${data.length}`)),
        catchError(this.handleError<IUser[]>('getDeveloper', [])));
  }

  /**
   * getUserById
   * @param id
   * @returns
   */
  getUserById(id: number): Observable<IUser> {
    return this._http.get<IUser>(`${this.DEVELOPER_URL}/${id}`, this.httpOptions)
      .pipe(
        tap((data: IUser) => this.log(`fetch data dev with Id = ${data?.id}`)),
        catchError(this.handleError<IUser>('getUSer'))
      );
  }

  /**
   *
   * @param searchTerm
   * @returns
   */
  searchUserByTerm(searchTerm: string) {

    return this._http.get<IUser[]>(`${this.DEVELOPER_URL}?email=^s`, this.httpOptions).pipe(
      tap(_ => this.log(`fetch developer when email content ${searchTerm}`)),
      catchError(this.handleError<IUser[]>('fetch developer with wither', [])
      )
    )
  }

  /**
   *
   */
  public addDeveloper(developer: IUser): Observable<IUser> {

    return this._http.post<IUser>(`${this.DEVELOPER_URL}`, developer, this.httpOptions)
      .pipe(
        retry(2),
        tap((newDev: IUser) => this.log(`added developer w/ id=${newDev.id}`)),
        catchError(this.handleError<IUser>('added developer')));
  }

  /**
   * updateDeveloper
   */
  public updateDeveloper(developer: IUser) {
    return this._http.put<IUser>(`${this.DEVELOPER_URL}`, developer, this.httpOptions)
      .pipe(
        retry(2),
        tap((_) => this.log(`added developer w/ id=${developer.id}`)),
        catchError(this.handleError<IUser>('added developer')));
  }

  /**
   * deleteDev
   */
  public deleteDev(id: number): Observable<IUser> {
    return this._http.delete<IUser>(`${this.DEVELOPER_URL}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        tap((_) => this.log(`deleted developer w/ id=${id}`)),
        catchError(this.handleError<IUser>('deleted developer')));
  }

  private handleError<T>(operation: string = '', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(<T>result);
    }
  }

  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
