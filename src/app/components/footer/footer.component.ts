import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinks=[
    ["MEN","OCA Low","OCA High","CATIBA Low","CATIBA High"],
    ["WOMEN","OCA Low","OCA High","CATIBA Low","CATIBA High"],
    ["SUPPORT","FAQ","Returns","Live Chat"],
    ["ABOUT","Mission","Vision","Future"],
    ["POP UP STORES","Find near you","Register"],
    ["NEWSLETTER"]
  ];
  footerMobileLinks=[
    ["SHOP","CATIBA","OCA"],
    ["SUPPORT","FAQ","Returns","Live Chat"],
  ];
  constructor() { }

  ngOnInit() {
  }

}
