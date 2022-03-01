
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReadNow from "../bookoptions/readbutton/ReadNow";

export default {
    title:'atoms/bookpagedetails/bookoptions/readbutton/ReadNow',
    Component: ReadNow,
}as ComponentMeta<typeof ReadNow>

const Template:ComponentStory<typeof ReadNow> = ()=><ReadNow  />;

export const Primary = Template.bind({});

