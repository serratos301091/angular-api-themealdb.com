import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RoutesApiService } from 'src/app/services/routes-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'inetum-dish-page-detail',
  templateUrl: './dish-page-detail.component.html',
  styleUrls: ['./dish-page-detail.component.scss']
})
export class DishPageDetailComponent implements OnInit {

  detail:any = [];
  youtube: any = '';
  constructor(private route: ActivatedRoute, 
              private sanitizer: DomSanitizer,
              private routesApiService: RoutesApiService) { }


  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        const id = params['id'];
        this.routesApiService.getDisheId(id).subscribe((resp)=>{
        const {meals} = resp;
        this.detail  = meals[0];
        this.youtube = this.getVideoIframe(this.detail.strYoutube);
         console.log(this.detail)
        })
      });
  }
 
  getVideoIframe(url: string) {
 
    if (url === null) {
        return '';
    }
    let results = url.match('[\\?&]v=([^&#]*)');
    let video   = (results === null) ? url : results[1];
 
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}
