
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookDetailsTitle from "./BookDetailsTitle";

export default {
    title:'atoms/bookpagedetails/booktitle/BookTitle',
    Component: BookDetailsTitle,
}as ComponentMeta<typeof BookDetailsTitle>

const Template:ComponentStory<typeof BookDetailsTitle> = ()=><BookDetailsTitle  />;

export const Primary = Template.bind({});

