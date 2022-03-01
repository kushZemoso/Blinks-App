
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { MemoryRouter } from 'react-router-dom';
import { ExploreMenu } from './ExploreMenu';

export default {
  title: 'molecule/explore-items/explore-grid/ExploreMenu',
  component: ExploreMenu,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

} as ComponentMeta<typeof ExploreMenu>;


const Template: ComponentStory<typeof ExploreMenu> = (args) => <ExploreMenu {...args}/>;




export const Primary = Template.bind({});

