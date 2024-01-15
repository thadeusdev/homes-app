import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations'

  // functions to allow dependencies to access the service's data.
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  constructor() { }
}

/**
 * Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app. To be used by multiple components, a service must be made injectable. Services that are injectable and used by a component become dependencies of that component. The component depends on those services and can't function without them.
 */
