
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import { AddToLibraryButton } from "./AddToLibraryButton";
export default {
    title:'atoms/addtolibrarybutton/AddToLibraryButton',
    Component: AddToLibraryButton,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof AddToLibraryButton>

const Template:ComponentStory<typeof AddToLibraryButton> = ()=><AddToLibraryButton  />;

export const Primary = Template.bind({});
