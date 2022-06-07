import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Injectable({
    'providedIn': 'root'
})

export class NamesDbService {
    constructor(private db: AngularFireDatabase) {
    }

    getFirstNameFromFireBaseDB(randInt: number): Observable<any> {
        return this.db.list<any>(`/idGenratorDb/fullName/firstName/${randInt}`).valueChanges();
    }
    getLastNameFromFireBaseDB(randInt: number): Observable<any> {
        return this.db.list<any>(`/idGenratorDb/fullName/lastName/${randInt}`).valueChanges();
    }

}   
