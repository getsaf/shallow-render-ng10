import {Shallow} from 'shallow-render';
import {OtherComponent} from './other.component';
import {OtherModule} from './other.module';

describe('OtherComponent', () => {
  let shallow: Shallow<OtherComponent>;
  beforeEach(() => {
    shallow = new Shallow(OtherComponent, OtherModule);
  });

  it('renders a div', async () => {
    const {find} = await shallow.render();
    expect(find('div')).toHaveFoundOne();
  });
});
