import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private route:Router){} 
  
  ngOnInit(): void {
  }
 
  escolhido: string = '';
  
  clickFunction(escolhido: string) {
    //alert("clicked me!" + escolhido);
    this.escolhido = escolhido;
  }

  salvaEscolha() {

    if (this.escolhido == "") {
      alert('Por favor, escolha um Curso');
      
    } else {
    
      if (this.escolhido == 'graduacao'){
        this.route.navigate(['/graduacao']);
      } else if (this.escolhido == 'posgraduacao') {
        this.route.navigate(['/posgraduacao']);
      } else {
        alert('Por favor, escolha um Curso');
      }
    }
  }

}
