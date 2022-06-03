import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { AddressResponseObject} from '../models/address.model'
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    'providedIn':'root'
})
export class AddressService{

    constructor(private myHttpClient:HttpClient,private db: AngularFireDatabase){
        
     }

     getFireBaseDataForGoodAdress(randInt:number):Observable<any>
     {
        return this.db.list<any>(`/idGenratorDb/generateAdressFromDataGov/GoodNumbersForStreets/${randInt}`).valueChanges();
     }

     getAddress(randInt:number):Observable<AddressResponseObject>
     {
        return this.myHttpClient.get<AddressResponseObject>(`https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=1&q=${randInt}`);
     }
}   
