import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
export function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // client side network error occured.
    console.error('Error occurred: ', error.error.message);
    return throwError(error.error.message);
  } else {
    // The backend return with unsuccessful status code
    if (error.status === 0) {
      console.error('Connection Error occurred: ', error.message);
      return throwError(error.statusText);
    }
    console.error(`Backend return with status code ${error.status} and the body was: ${error.error}`);
    return throwError(error.error);
  }
}
