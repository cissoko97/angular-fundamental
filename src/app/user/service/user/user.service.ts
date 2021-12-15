import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { IGeo, IUser } from '../../models';

@Injectable()
export class UserService {
  private httpOptions!: {};
  readonly DEVELOPER_URL = 'api/developers';
  readonly GEOS_URL = 'api/geos';

  constructor(private http: HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
  }

  /**
   * get All user from initial array
   * @returns Subject<IUser[]>
   */
  getUSer(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.DEVELOPER_URL}`, this.httpOptions)
      .pipe(
        retry(2),
        tap((data: Array<IUser>) => this.log(`fetch data dev with size ${data.length}`)),
        map((users: IUser[]) => users.map((user: IUser) => ({ ...user, reputation: user.reputation * 1.5 } as IUser))),
        catchError(this.handleError<IUser[]>('getDeveloper', [])));
  }

  /**
   * getGeoPosition
   */
  public getGeoPosition(): Observable<IGeo[]> {
    return this.http.get<IGeo[]>(`${this.GEOS_URL}`, this.httpOptions)
      .pipe(
        retry(2),
        tap((data: Array<IGeo>) => this.log(`fetch data Geos with size ${data.length}`)),
        catchError(this.handleError<IGeo[]>('getDeveloper', [])));
  }
  /**
   * getUserById
   * @param id
   * @returns
   */
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.DEVELOPER_URL}/${id}`, this.httpOptions)
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
  public searchUserByTerm(searchTerm: string): Observable<IUser[]> {

    return this.http.get<IUser[]>(`${this.DEVELOPER_URL}`, this.httpOptions).pipe(
      map((users: IUser[]) => users.filter((user: IUser) => user.email.includes(searchTerm?.trim()))),
      tap((data: IUser[]) => this.log(`fetch developer when email content ${searchTerm}`)),
      catchError(this.handleError<IUser[]>('fetch developer with wither', [])
      )
    );
  }

  /**
   *
   */
  public addDeveloper(developer: IUser): Observable<IUser> {

    return this.http.post<IUser>(`${this.DEVELOPER_URL}`, developer, this.httpOptions)
      .pipe(
        retry(2),
        tap((newDev: IUser) => this.log(`added developer w/ id=${newDev.id}`)),
        catchError(this.handleError<IUser>('added developer')));
  }

  /**
   * updateDeveloper
   */
  public updateDeveloper(developer: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.DEVELOPER_URL}`, developer, this.httpOptions)
      .pipe(
        retry(2),
        tap((_) => this.log(`added developer w/ id=${developer.id}`)),
        catchError(this.handleError<IUser>('added developer')));
  }

  /**
   * deleteDev
   */
  public deleteDev(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.DEVELOPER_URL}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        tap((_) => this.log(`deleted developer w/ id=${id}`)),
        catchError(this.handleError<IUser>('deleted developer')));
  }

  private handleError<T>(operation: string = '', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(`UserService: ${message}`);
  }
}
