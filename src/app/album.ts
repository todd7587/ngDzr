import {Artist} from './artist';

export class Album {
  id: number;
  title: string;
  link: string;
  cover: string;
  nb_album: number;
  nb_tracks: number;
  duration: number;
  rating: number;
  release_date: Date;
  available: boolean;
  artist: Artist;
}
