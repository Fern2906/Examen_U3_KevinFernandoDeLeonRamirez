import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../models/nota.model';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/notas';

  notas: WritableSignal<Nota[]> = signal<Nota[]>([]);

  cargarNotas(): void {
    this.http.get<Nota[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.notas.set(data);
      },
      error: (error) => {
        console.error('Error al cargar notas:', error);
      }
    });
  }

  agregarNota(nuevaNota: { titulo: string; contenido: string }): void {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe({
      next: (notaGuardada) => {
        this.notas.update((actuales) => [notaGuardada, ...actuales]);
      },
      error: (error) => {
        console.error('Error al agregar la nota:', error);
      }
    });
  }
}
