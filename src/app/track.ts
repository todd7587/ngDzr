import {Artist} from './artist';
import {Album} from './album';

export class Track {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  preview: string;
  artist: Artist;
  album: Album;
}
