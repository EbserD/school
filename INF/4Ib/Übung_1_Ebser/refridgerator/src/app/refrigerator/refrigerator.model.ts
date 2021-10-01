import { Injectable } from '@angular/core';

const MIN_COOLING_STAGE = 1;
const MAX_COOLING_STAGE = 3;

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
    if (this.coolingStage < MAX_COOLING_STAGE && this.isActive)
      this.coolingStage++;
  }

  decreaseCoolingStage(): void {
    if (this.coolingStage > MIN_COOLING_STAGE && this.isActive)
      this.coolingStage--;
  }

  toggleOnOff(): void {
    this.isActive = !this.isActive;
    if (this.coolingStage > 0) this.coolingStage = 0;
    else this.coolingStage = 2;
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
