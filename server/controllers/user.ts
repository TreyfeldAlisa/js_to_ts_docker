import db from '../../db/models';

const DB: any = db;
const { User } = DB;

export default {
  index(req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: any): any; new(): any; }; }; }) {
    return User.findAll()
      .then((users: { firstName: string; lastName: string; email: string; }) => res.status(201).send(users))
      .catch((error: string) => res.status(400).send(error));
  },
  create(req: { body: { firstName: string; lastName: string; email: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: any): any; new(): any; }; }; }) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })
      .then((user: { firstName: string; lastName: string; email: string; }) => res.status(201).send(user))
      .catch((error: string) => res.status(400).send(error));
  },
};
