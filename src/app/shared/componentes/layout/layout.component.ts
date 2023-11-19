import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
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
  message: string = 'Bienvenido a la serie Rick and Morty';
  mobileQuery: MediaQueryList;
  constructor(
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  private _mobileQueryListener: () => void;

}
