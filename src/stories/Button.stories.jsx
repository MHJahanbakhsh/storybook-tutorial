import Button from '../components/Button'

export default {
    title: "Components/Button",
    component: Button,
    argTypes:{handleClick:{action:'handleClick'}}
}

const Template = args=> <Button {...args}/>

export const Red = Template.bind({})
Red.args = {
    backgroundColor:'red',
    label:'press me',
    size:'md'
}
export const Green = Template.bind({})
Green.args = {
    backgroundColor:'Green',
    label:'press me',
    size:'md'
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor:'red',
    label:'press me',
    size:'sm'
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor:'Green',
    label:'press me',
    size:'lg'
}

export const LargeLabel = Template.bind({})
LargeLabel.args = {
    backgroundColor:'Green',
    label:'press mescjndfkhsdkfsdkfgbdfjksdfbj jkfsdfvjh',
    size:'md'
}