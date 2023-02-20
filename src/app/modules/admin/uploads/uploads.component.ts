import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Genre } from 'src/app/core/interfaces/genre.interface';
import { AdminService } from './../services/admin.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss'],
})
export class UploadsComponent implements OnInit {
  genreSelected: string = '';
  genreSelectedIDArray: string[] = [];
  genreSelectedName: string[] = [];
  genres: Genre[] = [];
  /*
   *formulario de subida de pelicula a la base de datos
   */
  movieForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required]],
    year: ['', [Validators.required]],
    genres: [this.genreSelectedIDArray],
    rating: [, Validators.required],
    posterImage: ['', [Validators.required]],
    description: ['', Validators.required],
    featured: [true, [Validators.required]],
    link: ['', [Validators.required]],
    link4k: [''],
  });

  constructor(private _formBuilder: FormBuilder, private _adminService: AdminService) {}
  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this._adminService.getAllGenres().subscribe((genres) => (this.genres = genres));
  }
  /*
   *aqui, obtenemos el id y el nombre de el select,en el cual cortamos por "," y llenamos ambos arrays tanto el de id,como el de nombre
   *el cual se muestra en las vistas
   */
  changes(event: Event) {
    const name = this.genreSelected.split(',').pop();
    const id = this.genreSelected.split(',').shift();
    this.genreSelectedIDArray.push(id!);
    this.genreSelectedName.push(name!);
  }

  uploadMovie() {
    const { name, year, genres, rating, posterImage, description, featured, link, link4k } = this.movieForm.value;
    this._adminService
      .uploadMovie(name, year, genres, rating, posterImage, description, featured, link, link4k)
      .subscribe();
    this.genreSelected = '';
    this.genreSelectedName = [];
    this.genreSelectedIDArray = [];
    this.movieForm.reset({ genres: this.genreSelectedIDArray });
  }
}
