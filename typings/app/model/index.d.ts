// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBook from '../../../app/model/book';
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Book: ReturnType<typeof ExportBook>;
    User: ReturnType<typeof ExportUser>;
  }
}
