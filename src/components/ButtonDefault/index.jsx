import { Button } from "@mui/material"

export const ButtonDefault = ({variant, text, color, size, children}) => {
    return(
        <Button 
            variant={variant}
            color={color}
            size={size}
            fullWidth
        >
            {text}
            {children}

        </Button>
    )
}