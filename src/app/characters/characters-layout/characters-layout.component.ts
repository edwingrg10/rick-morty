import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-characters-layout',
  templateUrl: './characters-layout.component.html',
  styleUrls: ['./characters-layout.component.css']
})
export class CharactersLayoutComponent implements OnInit {
  menu: any[] = [
    {
      displayName: 'Inicio',
      route: '/'
    },
    {
      displayName: 'Maestras',
      iconName: 'home',
      children: [
        {
          displayName: 'Personajes',
          iconName: 'card_travel',
          route: '/characters/list'
        }
      ]
    }
  ];
  mobileQuery: MediaQueryList;
  constructor(
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    console.log("router", this.router.url)
  }

  onMenuItemSelected(item: any) {

  }

  private _mobileQueryListener: () => void;

}
