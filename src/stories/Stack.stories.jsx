import Stack from '../components/Stack'

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes:{
        numberOfChildren:{type:'number', defaultValue:4}
    }
}

const divStyle = {
    width:'50px',
    height:'50px',
    backgroundColor:'red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

}
const Template = ({numberOfChildren,...args})=> {
console.log(numberOfChildren)
return <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n=>(
        <div style={divStyle}>
            {n+1}
        </div>
    ))}
</Stack>}

export const Horizontal = Template.bind({})
Horizontal.args = {
    direction:'row',
    spacing:2,
    wrap:false,
}

    export const Vertical = Template.bind({})
    Vertical.args = {
        direction:'column',
        spacing:2,
        wrap:false,
    }

export const wrapOverflow = Template.bind({})
wrapOverflow.args = {
    numberOfChildren:40,
    direction:'row',
    spacing:2,
    wrap:true,
}