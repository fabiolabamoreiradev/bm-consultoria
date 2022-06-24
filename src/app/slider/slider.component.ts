import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import {
  Swiper,
  Navigation
} from 'swiper';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent  {  
  
  public cursos!:any;
  public url:string;

  constructor(private route: ActivatedRoute) {

    this.url = route.snapshot.url[0].path;

    if (this.url === "posgraduacao") {
      this.cursos = ['Análise e Desenvolvimento de Sistemas','Gestão Comercial','Gestão de Recursos Humanos','Gestão Financeira','Logística','Processos Gerenciais','Redes de Computadores'];
    } else {
      this.cursos = ['Administração','Ciência da Computação','Ciências Contábeis','Direito','Engenharia Civil','Engenharia de Produção','Pedagogia'];
    }
  }

  ngAfterViewInit(): void {

   Swiper.use([Navigation]);
 
    var swiper = new Swiper(".container_swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  }

  
  

}
