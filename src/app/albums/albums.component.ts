import { Component, OnInit } from "@angular/core";
import { Album } from "../models";
import { AlbumsService } from "../albums.service";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: string;
  constructor(private albumsService: AlbumsService) {
    this.newAlbum = "";
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
  deleteAlbum(id: number) {
    this.albums = this.albums.filter(x => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log("Deleted", id);
    });
  }
  addAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.albumsService.addAlbum(album as Album).subscribe(album => {
      this.albums.push(album);
      // this.albums.unshift(album); push at the beginning
      this.newAlbum = "";
    });
  }
}
