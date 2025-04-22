import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrl: './pwa.component.css',
  standalone: false
})
export class PwaComponent implements OnInit {

  deferredPrompt: any; 

    ngOnInit(): void {
      let deferredPrompt: any;

      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome's mini-infobar
        e.preventDefault();
        deferredPrompt = e;

        // Show your custom install button
        //showInstallButton();
      });
    }

    instalPWA = async() => { 
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        const choiceResult = await this.deferredPrompt.userChoice;
        console.log(choiceResult.outcome);
        this.deferredPrompt = null;
    }
  }
}
