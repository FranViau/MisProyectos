import { Component, OnInit} from '@angular/core';
import $ from "jquery"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public infoTic;
  public infoTic2;
  public CursoJS;
  public tateti;
  public Angular;
  public Facerec;
  public Socket;

  constructor() {
    this.infoTic = {
      mirar: function():void{
        location.href = 'https://franviau.github.io/InfoTIC/';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/InfoTIC';
      }
    }

    this.infoTic2 = {
      mirar: function():void{
        location.href = 'https://franviau.github.io/InfoTIC2/';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/InfoTIC2';
      }
    }

    this.CursoJS = {
      mirar: function():void{
        location.href = 'https://franviau.github.io/Pagina-Curso-JS/';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/Pagina-Curso-JS';
      }
    }

    this.tateti = {
      mirar: function():void{
        location.href = 'https://github.com/FranViau/Ta-Te-Ti_ContraAI';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/Ta-Te-Ti_ContraAI';
      }
    }

    this.Angular = {
      mirar: function():void{
        location.href = 'https://franviau.github.io/Pagina-Angular/';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/Pagina-Angular';
      }
    }

    this.Facerec = {
      mirar: function():void{
        location.href = 'https://github.com/FranViau/Face-Recognition-Python-2020';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/Face-Recognition-Python-2020';
      }
    }

    this.Socket = {
      mirar: function():void{
        location.href = 'https://github.com/FranViau/Node-y-Socket.io';
      },
      editar: function():void{
        location.href = 'https://github.com/FranViau/Node-y-Socket.io';
      }
    }

   }

  ngOnInit(): void {
    if ($('#back-to-top').length) { // BACK TO TOP BUTTON
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
    }
  }

}


