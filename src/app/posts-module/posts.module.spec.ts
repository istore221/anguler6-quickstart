import { PostsModule } from './posts.module';

describe('PostModule', () => {
  let postsModule: PostsModule;

  beforeEach(() => {
    postsModule = new PostsModule();
  });

  it('should create an instance', () => {
    expect(postsModule).toBeTruthy();
  });
});
