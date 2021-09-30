import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Refrigerator {
  private isActive: boolean;
  private coolingStage: number;

  constructor() {
    this.isActive = false;
    this.coolingStage = 0;
  }

  increaseCoolingStage(): void {
    this.coolingStage++;
  }

  decreaseCoolingStage(): void {
    this.coolingStage--;
  }

  toggleOnOff(): void {
    this.isActive = !this.isActive;
  }

  changeState(action: string): void {
    switch (action) {
      case 'toggle':
        this.toggleOnOff();
        break;
      case 'decrease':
        this.decreaseCoolingStage();
        break;
      case 'increase':
        this.increaseCoolingStage();
        break;
      default:
        break;
    }
  }

  getState(): { isActive: boolean; coolingStage: number } {
    return {
      isActive: this.isActive,
      coolingStage: this.coolingStage,
    };
  }
}
