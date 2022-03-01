
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BannerTwo } from "./BannerTwo";

export default {
    title:'atoms/banner/banner-two/BannerTwo',
    Component: BannerTwo,
}as ComponentMeta<typeof BannerTwo>

const Template:ComponentStory<typeof BannerTwo> = ()=><BannerTwo />;

export const Primary = Template.bind({});   