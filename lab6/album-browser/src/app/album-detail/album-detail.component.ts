import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(a => this.album = a);
  }

  save() { if(this.album) this.albumService.updateAlbum(this.album).subscribe(); }
  goToPhotos() { if(this.album) this.router.navigate(['/albums', this.album.id, 'photos']); }
  goBack() { this.router.navigate(['/albums']); }
}