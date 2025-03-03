import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { JednostkiApiService } from './JednostkiApiService';
import { Jednostka } from '../models/Jednostka';

@Injectable({
  providedIn: 'root'
})
export class JednostkiBiezaceDataResolver implements Resolve<any> {
  constructor(private dataService: JednostkiApiService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Jednostka[]> {
    return await this.dataService.getPages(10000,1); // Replace with actual API call
  }
}
