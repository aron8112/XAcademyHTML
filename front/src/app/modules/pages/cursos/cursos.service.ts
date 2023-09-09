import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';

@Injectable({
    providedIn: 'root'
})
export class CoursesService
{
    constructor(private apiService: ApiService) { }

    getAllCourses(): Observable<Icourses[]>
    {
        return this.apiService.get<Icourses[]>('/courses/all')
            .pipe(
                catchError(this.handleError<Icourses[]>('getCourses', [])),
            );
    }

    getOneCourse(id: Params)
    {
        return this.apiService.get<Icourses>(`/courses/${id}`)
            .pipe(
                catchError(this.handleError<Icourses>('getCourse')),
            );
    }

    createCourse(url: string, body?: any): Observable<Icourses>
    {
        return this.apiService.post<Icourses>(url, body).pipe(
            catchError(this.handleError<Icourses>('newCourse')),
        );
    }
    private handleError<T>(operation = 'operation', result?: T)
    {
        return (error: any): Observable<T> =>
        {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}