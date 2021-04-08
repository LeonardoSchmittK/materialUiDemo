import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
   },
   list: {
      width: 250,
      fontFamily: "Arial",
   },
}));

export default useStyles;
