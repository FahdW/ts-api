import {Router, Request, Response, NextFunction} from 'express';
import {middleware} from '../interfaces/interfaces'
const Heroes = require('../data');

export class HeroRouter {

  constructor(public router: Router = Router()) {
    this.init();
  }

  public getAll(middleware: middleware) {
    middleware.res.send(Heroes);
  }

  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = parseInt(req.params.id);
    let hero = Heroes.find(hero => hero.id === query);
    if (hero) {
      res.status(200).send({
        message: 'Success',
        status: res.status,
        hero
      })
    } else {
      res.status(404).send({
        message: 'No hero found with the given id',
        status: res.status
      })
    }
  }

  public deleteOne(req: Request, res: Response, next: NextFunction) {
    let query = parseInt(req.params.id);
    let hero = Heroes.find(hero => hero.id === query);
    if (hero) {
      res.status(200).send({
        message: 'Success',
        status: res.status
      });
    } else {
      res.status(404).send({
        message: 'No hero found with the given id',
        status: res.status
      });
    }
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
    this.router.delete('/:id', this.deleteOne);
  }
}

const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
