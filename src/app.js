export class App
{
  message = 100;

  constructor()
  {
    this.name = "John";
    setInterval(() => {  this.message++; }, 12)
  }

  configureRouter(config, router) {
   
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('home/index'), title: 'Home', nav: true,   },
      { route: ['other'],       name: 'other',       moduleId: PLATFORM.moduleName('other/index'), title: 'Other', nav: true,   }
    ]);
    this.router = router;
    console.log(this.router)
  }
}