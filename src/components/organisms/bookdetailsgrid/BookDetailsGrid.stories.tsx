
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import { BookDetailsGrid } from "./BookDetailsGrid";
export default {
    title:'organisam/bookdetailsgrid/BookDetailsGrid',
    Component: BookDetailsGrid,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof BookDetailsGrid>

const Template:ComponentStory<typeof BookDetailsGrid> = (args)=><BookDetailsGrid {...args} />;

export const Primary = Template.bind({});

Primary.args={
    btn:true,
};

