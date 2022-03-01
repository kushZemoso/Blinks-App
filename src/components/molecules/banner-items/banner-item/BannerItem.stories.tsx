
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BannerItem } from "./BannerItem";

export default {
    title:'molecule/banner-items/BannerItems',
    Component: BannerItem,
}as ComponentMeta<typeof BannerItem>

const Template:ComponentStory<typeof BannerItem> = ()=><BannerItem />;

export const Primary = Template.bind({});


