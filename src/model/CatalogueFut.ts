
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


export class CatalogueFut {
   futId: number;
   futDescrCatalogueFut: string;
   futNomCatalogueFut: string;
   constructor(values: Object = {}) {
        Object.assign(this, values);
   }
} 