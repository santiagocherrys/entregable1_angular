import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'galeria';
  public categoria: string = "dado"
  // Variable to store the selected option
  public seleccion: string = 'todo';
  
  imagenes = [
    {id: 1, imagen: 'dice1', titulo: 'titulo1' , descripcion: 'imagen 1' , category: 'dado'},
    {id: 2, imagen: 'dice2', titulo: 'titulo2' , descripcion: 'imagen 2' , category: 'dado2'},
    {id: 3, imagen: 'dice3', titulo: 'titulo3' , descripcion: 'imagen 3' , category: 'dado'},
    {id: 4, imagen: 'dice4', titulo: 'titulo4' , descripcion: 'imagen 4' , category: 'dado2'},
    {id: 5, imagen: 'dice5', titulo: 'titulo5' , descripcion: 'imagen 5' , category: 'dado'},
    {id: 6, imagen: 'dice6', titulo: 'titulo6' , descripcion: 'imagen 6' , category: 'dado2'}
  ]

  // Mostrar ID
  showId(id: number): void {
    console.log('Image ID:', id);
  }

  

  // Method to handle changes in the dropdown selection
  onOptionChange(value:string): void {
    // You can do any logic based on the selected option here
    this.seleccion = value;
    console.log('Selected Option:', this.seleccion);
  }

  //Modal
  private modalElement: HTMLElement | null = null;
  private modalInstance: any; // Use `any` to avoid type issues

  ngAfterViewInit(): void {
    // Initialize the modal instance after the view has been initialized
    this.modalElement = document.getElementById('exampleModal');
    if (this.modalElement) {
      this.modalInstance = new (window as any).bootstrap.Modal(this.modalElement);
    }
  }

  openModal(): void {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}
