
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainBanner } from "./MainBanner";

export default {
    title:'molecule/banner-items/MainBanner',
    Component: MainBanner,
}as ComponentMeta<typeof MainBanner>

const Template:ComponentStory<typeof MainBanner> = ()=><MainBanner />;

export const Primary = Template.bind({});

