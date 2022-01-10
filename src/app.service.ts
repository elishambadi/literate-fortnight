import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlds!';
  }

  getShoes1(): string {
    return 'Come get your shoes';
  }
}
