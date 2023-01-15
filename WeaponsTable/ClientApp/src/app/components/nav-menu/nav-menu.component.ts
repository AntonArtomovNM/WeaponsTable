import { OperationType } from './../../enums/operationType';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { StyleService } from 'src/app/services/style.service';
import { WeaponService } from 'src/app/services/weapon.service';
import { WeaponFormDialogComponent } from '../weapons/weapon-form-dialog/weapon-form-dialog.component';
import { WeaponPropFormDialogComponent } from '../weapon-props/weapon-prop-form-dialog/weapon-prop-form-dialog.component';
import { WeaponPropertiesService } from 'src/app/services/weapon.properties.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent {
  isDarkMode: boolean = true;

  constructor(
    private readonly dialog: MatDialog,
    private readonly styleService: StyleService,
    private readonly weaponService: WeaponService,
    private readonly weaponPropService: WeaponPropertiesService,
    readonly iconRegistry: MatIconRegistry, 
    readonly sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIconLiteral('kcaa_logo', sanitizer.bypassSecurityTrustHtml(kcaaSvg));
    this.setTheme();
  }

  addWeapon(): void {
    const dialogRef = this.dialog.open(WeaponFormDialogComponent, {
      width: '1000px',
      data: {operation: OperationType.Add}
    });

    dialogRef.afterClosed().subscribe(weapon => {
      if (weapon) {
        this.weaponService.createWeapon(weapon).subscribe();
      }
    });
  }

  addWeaponProp(): void {
    const dialogRef = this.dialog.open(WeaponPropFormDialogComponent, {
      width: '1000px',
      data: {operation: OperationType.Add}
    });

    dialogRef.afterClosed().subscribe(weaponProp => {
      if (weaponProp) {
        this.weaponPropService.createWeaponProperty(weaponProp).subscribe();
      }
    });
  }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.setTheme();
  }

  private setTheme(){
    const theme = this.isDarkMode ? "dark-mode" : "light-mode";
    this.styleService.setStyle(`${theme}.css`);
  }
}

const kcaaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="205.658 229.119 63.797 53.074"><g transform="matrix(1, 0, 0, 1, 205.65816, 229.119007)"><g><path d="m8.8066,53.07422l0,-6.8437c0.2292,0 2.0417,-1.1875 5.4375,-3.5625c3.9375,-2.75 7.1875,-5.2605 9.75,-7.5313c3.4792,-3.0833 5.2187,-5.3646 5.2187,-6.8437l0,-0.9688c-4.875,0 -11.677,0.1042 -20.4062,0.3125l0,-5.875c6.4583,0.3125 13.5833,0.4688 21.375,0.4688c7.3333,0 13.7708,-0.1563 19.3125,-0.4688l0,5.875c-5.5417,-0.2083 -11.1667,-0.3125 -16.875,-0.3125l0,0.7188c0,1.1458 2.6562,4 7.9687,8.5625c5.3125,4.5833 8.2813,6.875 8.9063,6.875l0,6.5c-0.625,0 -3.2083,-2.2292 -7.75,-6.6875c-4.5208,-4.4375 -7.5625,-7.7396 -9.125,-9.9063l-0.3125,0c-0.9167,2.3958 -5.0521,6.3854 -12.4063,11.9688c-6.7708,5.1458 -10.4687,7.7187 -11.0937,7.7187z" style="fill: rgb(255, 255, 255); paint-order: fill;"/><path d="m25.6699,52.42582l-1.7461,-0.1524c-0.2891,-0.9609 -0.4336,-2.0078 -0.4336,-3.1406c0,-2.6875 0.7344,-4.707 2.2031,-6.0586c1.4766,-1.3516 3.2774,-2.0273 5.4024,-2.0273c2.2265,0 4.1445,0.7539 5.7539,2.2617c1.6172,1.5078 2.4257,3.5351 2.4257,6.082c0,0.7031 -0.1054,1.4453 -0.3164,2.2266l-1.8632,-0.3282c0.2812,-0.8984 0.4218,-1.6992 0.4218,-2.4023c0,-1.8906 -0.5859,-3.3242 -1.7578,-4.3008c-1.1719,-0.9765 -2.6054,-1.4648 -4.3008,-1.4648c-1.7265,0 -3.207,0.5625 -4.4414,1.6875c-1.2343,1.125 -1.8515,2.6797 -1.8515,4.664c0,0.7578 0.1679,1.7422 0.5039,2.9532z" style="fill: rgb(255, 255, 255); paint-order: fill;"/><path d="m21.7968,22.88672l-3.7089,0c0,-0.7852 -0.7383,-3.252 -2.2149,-7.4004l-10.1426,0c-1.4531,4.0899 -2.1796,6.5566 -2.1796,7.4004l-3.5508,0c0,-0.4336 1.5117,-4.1777 4.5351,-11.2324c3.0235,-7.0664 4.5352,-10.95119 4.5352,-11.65432l4.0781,0c0,0.69141 1.4414,4.51762 4.3242,11.47852c2.8828,6.9609 4.3242,10.7637 4.3242,11.4082zm-6.7324,-9.7031c-2.7539,-6.8789 -4.1308,-10.53518 -4.1308,-10.96878l-0.1934,0c0,0.36329 -1.4238,4.01958 -4.2715,10.96878l8.5957,0z" style="fill: rgb(255, 255, 255); paint-order: fill;"/><path d="m63.7968,22.88672l-3.709,0c0,-0.7852 -0.7382,-3.252 -2.2148,-7.4004l-10.1426,0c-1.4531,4.0899 -2.1797,6.5566 -2.1797,7.4004l-3.5507,0c0,-0.4336 1.5117,-4.1777 4.5351,-11.2324c3.0235,-7.0664 4.5352,-10.95119 4.5352,-11.65432l4.0781,0c0,0.69141 1.4414,4.51762 4.3242,11.47852c2.8828,6.9609 4.3242,10.7637 4.3242,11.4082zm-6.7324,-9.7031c-2.7539,-6.8789 -4.1308,-10.53518 -4.1308,-10.96878l-0.1934,0c0,0.36329 -1.4238,4.01958 -4.2715,10.96878l8.5957,0z" style="fill: rgb(255, 255, 255); paint-order: fill;"/><line stroke-width="2" y2="22.88672" x2="29.8066" y1="7.88672" x1="29.8066" style="fill: rgb(255, 255, 255); paint-order: fill; stroke: rgb(255, 255, 255);"/><rect stroke-width="2" height="6" width="10" y="9.88672" x="29.8066" style="fill: rgb(255, 255, 255); paint-order: fill;"/></g></g></svg>`
