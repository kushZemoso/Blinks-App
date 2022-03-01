
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BannerOne } from "./BannerOne";

export default {
    title:'atoms/banner/banner-one/BannerOne',
    Component: BannerOne,
}as ComponentMeta<typeof BannerOne>

const Template:ComponentStory<typeof BannerOne> = ()=><BannerOne />;

export const Primary = Template.bind({});