
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { KeyIdeas } from "./KeyIdeas";

export default {
    title:'atoms/KeyIdeas/KeyIdeas',
    Component: KeyIdeas,
}as ComponentMeta<typeof KeyIdeas>

const Template:ComponentStory<typeof KeyIdeas> = ()=><KeyIdeas  />;

export const Primary = Template.bind({});

