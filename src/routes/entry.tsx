import { Button, Paper } from "@mui/material"
import { Link } from "react-router-dom"

export const EntryRoads={
    path:'/',
    element:<div>
        <Paper>  
        <h1>where do u want to go</h1>
        <Link to="/all-lessons"> <Button variant="contained" color="success">
  lessons
</Button>
</Link>

<Button variant="outlined" color="error">
project
</Button>

        </Paper>
    </div>
}


export const AllLessons={
    path:'/all-lessons',
    element:<h1>all lessons</h1>
}