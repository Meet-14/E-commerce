import { Component, Input } from '@angular/core';
import { navigation } from './navbar-contant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.css'
})
export class NavContentComponent {
  category:any
  @Input() selectedSection:any

  constructor(private _router:Router){}

  ngOnInit(){
    this.category = navigation;
    console.log("Selected section",this.selectedSection)
  }

  hendleNavigate=(path:any)=>{
    this._router.navigate([path])
  }
}
