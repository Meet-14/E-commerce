import { Component, HostListener } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentSection: any
  isNavbarOpen: any
  openNavbarContent(section: any) {
    this.isNavbarOpen = true;
    this.currentSection = section
  }
  closeNavbarContent() {
    this.isNavbarOpen = false
  }

  @HostListener('document:click', [`$event`])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector(".modal-container");
    const openButton = document.querySelectorAll(".open-button");

    let clickInSideButton = false
    openButton.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInSideButton = true
      }
    });
    if (modalContainer && !clickInSideButton && this.isNavbarOpen) {
      this.closeNavbarContent();
    }
  }

  checkLogin(): boolean {
    const jwtToken = localStorage.getItem('jwt');
    return jwtToken !== null && jwtToken !== undefined;
  }

  logOut() {
    localStorage.removeItem('jwt'),
      Swal.fire(
        'LogOut Successfully',
        'Visit again !',
        'success'
      )
  }
}
