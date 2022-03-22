import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero.model";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero?: Hero;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      data => this.hero = data
    );
  }

  goBack() {
    this.location.back();
  }
}
