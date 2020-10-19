import { AppComponent } from './app.component';
import {AppModule} from './app.module';
import { Shallow } from 'shallow-render';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;
  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('should render title', async () => {
    const { find } = await shallow.render();
    expect(find('.content span')[0].nativeElement.textContent).toContain('shallow-render-ng10 app is running!');
  });
});
