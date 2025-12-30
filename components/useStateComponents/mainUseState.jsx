import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function MainUseState() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
            <Typography variant="h1" color="success.main" sx={{ mb: 3 }}>
                Counter: {count}
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" color="primary" onClick={increment}>
                    Increment
                </Button>
                <Button variant="contained" size="large" color="secondary" onClick={decrement}>
                    Decrement
                </Button>
                <Button variant="outlined" size="large" onClick={reset}>
                    Reset
                </Button>
            </Stack>
        </Box>
    );
}

export default MainUseState;