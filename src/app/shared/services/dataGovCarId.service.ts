import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarIdFromDataGovObject } from '../models/carIdModel';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ICarData } from '../models/carDataModeFinalObj.model';



@Injectable({
    'providedIn':'root'
})
export class DataGocCarIdService{
    randIntMax=0;
    moedAliaLacvish:string ="";
    carDataObj: ICarData={
        vin: '',
        carId: '',
        tozeret_nm: '',
        tozeret_cd: ''
    };
    constructor(private myHttpClient:HttpClient,private db: AngularFireDatabase){
     }

     getFireBaseData(randInt:number,manufacture:string):Observable<any>
     {
        return this.db.list<any>(`/idGenratorDb/generateAdressFromDataGov/generateIdFromDataGov/${manufacture}/${randInt}`).valueChanges();
     }

     getCarIdFromDataGov(moedAliaLacvish:string,randInt:number,manufacture:string):Observable<CarIdFromDataGovObject>
     {
        if(moedAliaLacvish=='')
        {
            return this.myHttpClient.get<CarIdFromDataGovObject>(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=1&q=${randInt}`);
        }
        else
        {
            return this.myHttpClient.get<CarIdFromDataGovObject>(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${manufacture}&q=${moedAliaLacvish}`);
        }
     }
}   
