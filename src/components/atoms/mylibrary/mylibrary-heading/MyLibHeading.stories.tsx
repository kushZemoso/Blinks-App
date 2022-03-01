
import {ComponentMeta , ComponentStory} from  '@storybook/react';
import MyLibHeading from './MyLibHeading';

export default {
    title:'atoms/mylibrary/mylibrary-head/MyLibraryHeading',
    Component:MyLibHeading,
} as ComponentMeta<typeof MyLibHeading>;

const Template:ComponentStory<typeof MyLibHeading> = ()=><MyLibHeading />;

export const Primary = Template.bind({});
