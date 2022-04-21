import  FormControl  from "@mui/material/FormControl";
import  OutlinedInput  from "@mui/material/OutlinedInput";
import InputAdornment from '@mui/material/InputAdornment';

import Button from "./buttons";


export const Input = (props) => {
    return (
        <FormControl color="success">
            <OutlinedInput {...props} />
        </FormControl>
    );
}

const TryForm = () => {
    return (
        <form className="join-form">
            <h2>Start your free 14-day trial of Shopify</h2>
            <Input placeholder="Email Address"/>
            <Input placeholder="Password" />
            <Input 
                endAdornment={<InputAdornment sx={{width: '150px', ml: '0'}} position="end">.myshopify.com</InputAdornment>}
                placeholder="Your store name"
            />
            <div style={{marginTop: '10px'}}>
                This is the URL that customers will use to visit your store.
                You can also buy a custom domain like mystore.com and
                connect it to this store. <Button color="green">Learn more</Button>
            </div>
            <div>
                <Button sx={{ml: 'auto'}} variant="contained" color="green">Create your store</Button>
            </div>
        </form>
    )
}

export default TryForm;