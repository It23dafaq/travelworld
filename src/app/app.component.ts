import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infinity-app';
  deviceInfo :any ;
  constructor(
    public translate: TranslateService,private deviceService: DeviceDetectorService
  ) {
    translate.addLangs(['en', 'gr']);
    translate.setDefaultLang('gr');
    this.deviceCheck();
  }
  deviceCheck() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    if(isMobile){
      window.location.href='http://www.google.com';
    }else if(isTablet){
      window.location.href='http://www.google.com';
    }
    
  }
}
