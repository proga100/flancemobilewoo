import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { NavController , Platform} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  url: string;  
  
 // constructor(private inAppBrowser: InAppBrowser ) { }
  
  
  constructor(private inAppBrowser: InAppBrowser, public platform: Platform, public navCtrl: NavController) {
this.openUrl();

  }
  
  
/*
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
	  clearcache: 'yes',
	  clearsessioncache: 'yes'
    }



    // Opening a URL and returning an InAppBrowserObject
   //var browser = this.inAppBrowser.create('http://apache.org', '_self', options);
	const ref = this.inAppBrowser.create('http://apache.org', '_self', options);
	
//ref.show();
   // Inject scripts, css and more with browser.X
  }
  
 */
 
 
  
  
  openUrl() {
	   const options: InAppBrowserOptions = {
      zoom: 'no',
	  clearcache: 'yes',
	  clearsessioncache: 'yes',
	  location: 'no'
    }

        this.platform.ready().then(() => {
		
	   const ref = this.inAppBrowser.create('http://fmobilewoo.flance.info', '_self', options);
	   
	   

        });
		
  }
}
