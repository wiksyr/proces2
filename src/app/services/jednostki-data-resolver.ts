import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { JednostkiApiService } from './JednostkiApiService';
import { JednostkaSkrocona } from '../models/JednostkaSkrocona';

@Injectable({
  providedIn: 'root'
})
export class JednostkiDataResolver implements Resolve<any> {
  constructor(private dataService: JednostkiApiService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<JednostkaSkrocona[]> {
    return await this.dataService.getSkrocona(5000,1); // Replace with actual API call
  }
}
