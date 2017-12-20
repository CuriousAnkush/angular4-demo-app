import { Injectable } from '@angular/core';

@Injectable()
export class MassangerService {
  private messages: string[] = [];
  setMessage(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
  constructor() { }

}
