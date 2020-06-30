import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public infoTic = {
    mirar: function():void{
      location.href = 'https://franviau.github.io/InfoTIC/';
    },
    editar: function():void{
      location.href = 'https://github.com/FranViau/InfoTIC';
    }
  }


}
