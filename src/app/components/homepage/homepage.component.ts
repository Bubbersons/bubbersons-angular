import { Component } from '@angular/core';


@Component({

  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})


export class HomepageComponent {
  windowWidth = window.innerWidth;
  constructor(){
  }

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  images = ['https://www.cmss.gov.in/wp-content/uploads/2021/12/Slider-new-1.jpg','https://3.bp.blogspot.com/-B5ELAwZBS2I/XNTwclI8r6I/AAAAAAAANNM/u-hoGYH8I3w4h6hOcKCXMTp3UU3E2anxgCLcBGAs/s1600/background%2Bpowerpoint%2Bmedical%2Bstethoscope.JPG','https://www.outsourcing-pharma.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/pharmaceutical-science/outsourcing-pharma.com/headlines/markets-regulations/despite-covid-19-pharma-r-d-funding-at-all-time-high-iqvia/12527429-1-eng-GB/Despite-COVID-19-pharma-R-D-funding-at-all-time-high-IQVIA.jpg']

  ngOnInit(): void {
    this.slides[0] = {
      src: this.images[0],
    };
    this.slides[1] = {
      src: this.images[1],
    }
    this.slides[2] = {
      src: this.images[2],
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  title = 'bubbersons-angular';


  awards =["../../../assets/Awards/DSCN3940.JPG" ,"../../../assets/Awards/DSCN3960.JPG","../../../assets/Awards/DSCN4005.JPG","../../../assets/Awards/DSC_8712.JPG","../../../assets/Awards/DSC_8745.JPG","../../../assets/Awards/DSCN3956.JPG","../../../assets/Awards/DSCN3978.JPG","../../../assets/Awards/DSCN4009.JPG","../../../assets/Awards/DSC_8714.JPG","../../../assets/Awards/DSC_8746.JPG","../../../assets/Awards/DSCN3957.JPG","../../../assets/Awards/DSCN3979.JPG","../../../assets/Awards/DSCN4018.JPG","../../../assets/Awards/DSC_8715.JPG","../../../assets/Awards/DSC_8747.JPG","../../../assets/Awards/DSCN3959.JPG","../../../assets/Awards/DSCN3980.JPG","../../../assets/Awards/DSCN4021.JPG","../../../assets/Awards/DSC_8716.JPG","../../../assets/Awards/DSC_8807.JPG"]

  newsArr = ['Drug sales may rise 8 per cent in FY24: Study','Novavax cut $50 million in costs, plans to slash more, CEO says','COVID not yet over cautions IMA President calls for strict vigil','Parkinson’s disease: Music therapy a promising future treatment?']
  public innerWidth: any;
  newsBox :any;
  public index = 0;

  setDisplay(){
    this.index = (this.index+1)%this.newsArr.length
    this.newsBox.innerHTML = this.newsArr[this.index]
  }

  ngAfterViewInit() {
    this.innerWidth = window.innerWidth;
    this.newsBox = document.getElementById("newsBox");
this.setDisplay()
    setInterval(()=>{this.setDisplay();}, 5000);
  }
  }
