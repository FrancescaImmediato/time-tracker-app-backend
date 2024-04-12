//Used perplexity.ai to code this page
import { Controller, Get } from '@nestjs/common';

@Controller('api/hello-world')
export class AppController {
  @Get()
  getHelloWorld(): string {
    return 'Hello world';
  }
}

//reminder to self: npm run start:dev