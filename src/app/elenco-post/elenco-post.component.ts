import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';
import { Commento } from '../models/commento';

@Component({
  selector: 'app-elenco-post',
  templateUrl: './elenco-post.component.html',
  styleUrls: ['./elenco-post.component.css']
})
export class ElencoPostComponent implements OnInit {
  elencoPost: Post[];
  elencoCommenti: Commento[];
  constructor(private servizioDati: PostsService) { }
  visualizzaPost(post: Post) {
    this.servizioDati.estraiCommenti(post.id).subscribe(commenti => {this.elencoCommenti = commenti;
    console.log(commenti);
  });
  }
  ngOnInit() {
    this.servizioDati.estraiPost().subscribe(elenco => { this.elencoPost = elenco;
    console.log(elenco);
    });
  }

}
